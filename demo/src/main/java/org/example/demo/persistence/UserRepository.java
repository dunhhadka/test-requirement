package org.example.demo.persistence;

import org.example.demo.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {
    List<User> findByEmail(String email);

    User findByEmailAndPassword(String email, String password);
}
