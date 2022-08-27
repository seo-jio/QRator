// package com.mission24group.mission24;

// import com.mission24group.mission24.domain.User;
// import com.mission24group.mission24.repository.UserRepository;
// import org.junit.jupiter.api.Test;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.context.SpringBootTest;
// import org.springframework.test.annotation.Rollback;
// import org.springframework.transaction.annotation.Transactional;

// @SpringBootTest
// @Transactional
// class Mission24ApplicationTests {

// 	@Autowired
// 	UserRepository userRepository;
// 	@Test
// 	@Rollback(value = false)
// 	void contextLoads() {
// 		User user = new User("t@1", "1234", "test");
// 		System.out.println("user.getEmail() = " + user.getEmail());
// 		userRepository.save(user);
// 	}

// }
