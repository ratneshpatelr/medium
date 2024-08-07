import React from 'react';
import { Tabs } from 'expo-router';
import useUser from '@/hooks/auth/useUser';
import { Image } from 'react-native';

const TabsLayout = () => {
  const { user } = useUser();

  return (
    <Tabs screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          let isUri = false;

          if (route.name === "index") {
            iconName = require("@/assets/icons/house.png");
          } else if (route.name === "search/index") {
            iconName = require("@/assets/icons/search.png");
          } else if (route.name === "courses/index") {
            iconName = require("@/assets/icons/course.png");
          } else if (route.name === "profile/index") {
            if (user?.avatar?.url) {
              iconName = { uri: user.avatar.url };
              isUri = true;
            } else {
              iconName = require("@/assets/icons/profile.png");
            }
          }

          return (
            <Image
              source={iconName}
              style={{ 
                width: 24, 
                height: 24, 
                tintColor: isUri ? undefined : color, 
                borderRadius: isUri ? 50 : 1
              }}
            />
          );
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          flexDirection: "row",
          justifyContent: 'space-between',
          alignItems: "center",
          backgroundColor: "white",
          marginHorizontal: 20,
          borderRadius: 27
        }
      })}
    >
      <Tabs.Screen name="index"  />
      <Tabs.Screen name="search/index"  />
      <Tabs.Screen name="courses/index" />
      <Tabs.Screen name="profile/index"  />
    </Tabs>
  );
};

export default TabsLayout;
