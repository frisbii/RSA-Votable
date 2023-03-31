import { View, Text, ScrollView } from "react-native";
import { Card, CardContent } from '@mui/material';

import Carousel from 'react-material-ui-carousel';

function Countdowns() {
  const elections = [
    { time:'1:11:12:43', name:'Winston-Salem Sewage Manager'},
    { time:'2:15:21:53', name:'North Carolina Senate (Class A)'},
    { time:'31:21:12:42', name:'Forsyth County Secession Referendum'},
    { time:'234:51:09:40', name:'Winston-Salem Mayor'},
  ]

  return (
    <Carousel 
      animation='slide' 
      sx={{ width:'100%' }}
    >
      {
        elections.map( (elections) => {
          return(
            <View key={elections.name}>
              <Text>{elections.time}</Text>
              <Text>{elections.name}</Text>
            </View>
          )
        })
      }
    </Carousel>
  )
}

export default function HomeScreen() {
  return(
    <ScrollView style={{ padding: 20 }}>
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
          Hello,
          <Text style={{ color: 'purple' }}> Macaroni</Text>
        </Text>
      </View>

      <View style={{ gap: 10 }}>
        <Card style={{ height: 175, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Countdowns />
        </Card>

        <Card style={{ height: 175 }}>
          <CardContent>
            <Text style={{ fontSize: 16 }}>
              Polling Place
            </Text>
          </CardContent>
        </Card>

        <Card style={{ height: 175 }}>
          <CardContent>
            <Text style={{ fontSize: 16 }}>
              News
            </Text>
          </CardContent>
        </Card>
      </View>

      <View>
        <Text style={{ paddingTop: 20, textAlign: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>Votable.</Text> Democratizing Democracy.
        </Text>
      </View>

    </ScrollView>
  );
}