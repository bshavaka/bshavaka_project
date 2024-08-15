import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { COLORS } from "../../constants/theme";

const ReviewScreen = () => {
  const [reviews, setReviews] = useState([
    { id: 1, user: 'User1', comment: 'Great atmosphere!', rating: 4 },
    { id: 2, user: 'User2', comment: 'Good drinks and friendly staff.', rating: 5 },
    // Add more initial reviews as needed
  ]);

  const [newReview, setNewReview] = useState({ user: '', comment: '', rating: 1 });
  const [isSelectingRating, setIsSelectingRating] = useState(false);

  const handleAddReview = () => {
    if (newReview.user !== '' && newReview.comment !== '') {
      setReviews([...reviews, { id: reviews.length + 1, ...newReview }]);
      setNewReview({ user: '', comment: '', rating: 1 });
    }
  };

  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Text key={i} style={i <= rating ? styles.starFilled : styles.starOutline}>
          ★
        </Text>
      );
    }
    return <View style={styles.starContainer}>{stars}</View>;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Reviews</Text>

      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.reviewItem}>
            <Text style={styles.userName}>{item.user}</Text>
            {renderStarRating(item.rating)}
            <Text style={styles.comment}>{item.comment}</Text>
          </View>
        )}
      />

      <Text style={styles.addReviewHeading}>Add Your Review</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={newReview.user}
        onChangeText={(text) => setNewReview({ ...newReview, user: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Comment"
        value={newReview.comment}
        onChangeText={(text) => setNewReview({ ...newReview, comment: text })}
        multiline
      />

      <View style={styles.ratingContainer}>
        {isSelectingRating && (
          <>
            {/* <Text style={styles.ratingText}>Select Rating:</Text> */}
            <Picker
              style={{flex : 1}}
              selectedValue={newReview.rating}
              onValueChange={(itemValue) => setNewReview({ ...newReview, rating: itemValue })}
              prompt="Select Rating"
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <Picker.Item key={value} label={value.toString()} value={value} />
              ))}
            </Picker>
          </>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Submit Review" onPress={handleAddReview} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: COLORS.white,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: COLORS.black,
  },
  reviewItem: {
    marginBottom: 16,
    backgroundColor: COLORS.orange,
    borderRadius: 10,
    padding: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  comment: {
    fontSize: 16,
    color: COLORS.white,
  },
  addReviewHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: COLORS.black,
  },
  input: {
    height: 40,
    borderColor: COLORS.gray,
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    color: COLORS.black,
  },
  starContainer: {
    flexDirection: 'row',
  },
  starFilled: {
    color: "blue", // This is where the orange color is incorporated
    fontSize: 20,
  },
  starOutline: {
    color: COLORS.gray,
    fontSize: 20,
  },
  ratingContainer: {
    marginBottom: 20,
  },
  ratingText: {
    fontSize: 16,
    marginBottom: 8,
    color: COLORS.black,
  },
  // picker: {
  //   height: 40,
  //   borderColor: COLORS.gray,
  //   borderWidth: 1,
  //   marginBottom: 10,
  //   color: COLORS.black,
  // },
  buttonContainer: {
    marginTop: 20,
  },
});

export default ReviewScreen;