import axios from 'axios';

export const notification = (user, recipeName) => async dispatch => {
  try {
    dispatch({type: 'NOTIFICATION_REQUEST'});
    const result = await axios.post(
      `https://onesignal.com/api/v1/notifications`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Basic ${process.env.REST_API_KEY}`,
          'content-type': 'application/json',
        },
        data: {
          included_segments: "Subscribed Users",
          app_id: `${process.env.ONESIGNAL_APP_ID}`,
          headings: {en: `${user} Has Posted ${recipeName}`},
          contents: {en: "Check it out now!"},
          name: "INTERNAL_CAMPAIGN_NAME",
        },
      },
    );
    dispatch({type: 'NOTIFICATION_SUCCESS', payload: result.data});
    navigation.navigate('My Recipes');
  } catch (err) {
    console.log(err);
    dispatch({type: 'NOTIFICATION_ERROR'});
    console.log(process.env.REST_API_KEY)
    console.log(process.env.ONESIGNAL_APP_ID)
  }
};
