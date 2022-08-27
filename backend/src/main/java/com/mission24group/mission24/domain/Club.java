package com.mission24group.mission24.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor
@Table(name = "club")
public class Club {
    @Id
    @GeneratedValue
    private Long id;
    private String clubName;
    private int currentCount;

    @OneToMany(mappedBy = "club")
    private List<User> users = new ArrayList<>();

//    private List<String> temp = new ArrayList<>();
}
