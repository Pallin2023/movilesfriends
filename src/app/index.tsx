import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

const index = () => {
  const {width}=useWindowDimensions();
  return (
    <View style={styles.container}>
      <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={{flexGrow:0}}
      >
        <Image
        source={require("../../assets/images/banner1.png")}
        style={{width:width, height:200}}
        resizeMode='contain'
        />
         <Image
        source={require("../../assets/images/banner2.png")}
        style={{width:width, height:200}}
        resizeMode='contain'
        />
           <Image
        source={require("../../assets/images/banner3.png")}
        style={{width:width
          , height:200}}
        resizeMode='contain'
        />
        

      </ScrollView>
      <Text>INICIO</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptate iste molestiae dolores repellat sunt velit harum. Nisi reprehenderit nulla corrupti, odit labore laboriosam dicta quam inventore? Veritatis, laborum earum!
      Impedit, molestiae a illo minima nam, quia dolorum, eos ipsum laborum consectetur repellendus harum quaerat. Maxime itaque quidem assumenda error sequi natus, aliquid qui magnam fuga dolorem neque delectus incidunt?</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20
  },
  
});
