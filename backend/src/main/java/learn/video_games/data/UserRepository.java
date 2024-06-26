package learn.video_games.data;

import learn.video_games.models.Auth;
import learn.video_games.models.User;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface UserRepository {
    //List<User> findAll();

    User findByAuth(Auth userToAuth);

    User findByEmail(String email);

    User add(User user);



    /*

    boolean update(User user);

    @Transactional
    boolean deleteById(int userId);

     */
}

