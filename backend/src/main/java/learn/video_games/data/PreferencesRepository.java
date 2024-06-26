package learn.video_games.data;

import learn.video_games.models.Preference;
import learn.video_games.models.Preferences;
import learn.video_games.models.User;

import java.util.ArrayList;
import java.util.List;

public interface PreferencesRepository {

    boolean add(Preferences preferences);

    public List<Preference> queryAll(int userId);


    boolean deleteByUser(int userId);

}
