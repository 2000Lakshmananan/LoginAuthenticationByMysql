package com.example.demo.controllerClass;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.repo.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class usersController {
@Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }

    @PostMapping("save-user") 
    public User saveStudent(@RequestBody User users) {  
         return userRepository.save(users);
    }   
    
    @GetMapping("user/{id}")  
    public void allUserByID(@PathVariable("id") int idd,User user) {  
         user.setId(idd);
         userRepository.save(user);
         System.out.println("Updated USER ID "+user.getId()+" iDD "+idd);
         return;  
          
    }  
}
