package com.mission24group.mission24.auth;

import com.mission24group.mission24.domain.User;
import com.mission24group.mission24.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        User userEntity = userRepository.findByEmail(email);
        if (userEntity != null) {
//            System.out.println("memberEntity = " + userEntity.getEmail());
            return new PrincipalDetails(userEntity);
        }
        return null;
    }
}
