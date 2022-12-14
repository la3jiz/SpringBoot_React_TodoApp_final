package com.todo_server_v2.Security;

import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		http.authorizeRequests().antMatchers(HttpMethod.POST,"api/listAll").hasAnyAuthority("ADMIN");
		
		http.authorizeRequests().antMatchers(HttpMethod.POST,"api/add").hasAnyAuthority("ADMIN","USER");
		
		http.authorizeRequests().antMatchers(HttpMethod.GET,"api/list/**").hasAnyAuthority("ADMIN","USER");
		
		
		http.authorizeRequests().antMatchers(HttpMethod.DELETE,"api/all/**").hasAnyAuthority("ADMIN","USER");
		
		http.authorizeRequests().antMatchers(HttpMethod.DELETE,"api/**").hasAnyAuthority("ADMIN","USER");
		
		http.authorizeRequests().antMatchers(HttpMethod.PUT,"api/**").hasAnyAuthority("ADMIN","USER");
	}

}
