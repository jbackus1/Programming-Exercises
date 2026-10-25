import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  Platform,
} from 'react-native';

// ---------- Data ----------
const CORE = [
  { code: 'CS 504', title: 'Software Engineering' },
  { code: 'CS 506', title: 'Programming for Computing' },
  { code: 'CS 519', title: 'Cloud Computing Overview' },
  { code: 'CS 533', title: 'Computer Architecture' },
  { code: 'CS 547', title: 'Secure Systems and Programs' },
  { code: 'CS 622', title: 'Discrete Math and Algorithms for Computing' },
  { code: 'DS 510', title: 'Artificial Intelligence for Data Science' },
  { code: 'DS 620', title: 'Machine Learning & Deep Learning' },
];

const DEPTH = [
  { code: 'CS 624', title: 'Full-Stack Development - Mobile App' },
  { code: 'CS 628', title: 'Full-Stack Development - Web App' },
];


const CAPSTONE = [{ code: 'CS 687', title: 'Capstone Project' }];

// ---------- Reusable section component ----------
const CourseSection = ({ number, label, credits, courses, query }) => {
  // remove spaces and lowercase so "cs624" matches "CS 624"
  const clean = (text) => text.replace(/\s/g, '').toLowerCase();

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardLabel}>
          // {number} {label}
        </Text>
        <View style={styles.creditBadge}>
          <Text style={styles.creditText}>{credits} CR</Text>
        </View>
      </View>

      {courses.map((course) => {
        const isMatch = query !== '' && clean(course.code).includes(clean(query));
        return (
          <View
            key={course.code}
            style={[styles.courseRow, isMatch && styles.courseRowMatch]}
          >
            <Text style={[styles.code, isMatch && styles.codeMatch]}>
              {course.code}
            </Text>
            <Text style={styles.courseTitle}>{course.title}</Text>
          </View>
        );
      })}
    </View>
  );
};

// ---------- Main component (arrow function) ----------
const CoreComponents = () => {
  const [query, setQuery] = useState('');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoFrame}>
          <Image source={require('@/assets/icon.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>MSCS Course Explorer</Text>
        <Text style={styles.subtitle}>
          {'> master_of_science.computer_science'}
        </Text>
      </View>

      {/* Input */}
      <View style={styles.inputWrap}>
        <Text style={styles.inputLabel}>Which course did you like?</Text>
        <TextInput
          style={styles.input}
          placeholder="ex. CS624"
          placeholderTextColor="#C79AB0"
          value={query}
          onChangeText={setQuery}
          autoCapitalize="characters"
          autoCorrect={false}
        />
        {query !== '' && (
          <Text style={styles.favorite}>
            favorite_course = "{query.toUpperCase()}"
          </Text>
        )}
      </View>

      {/* Course sections */}
      <CourseSection number="01" label="CORE" credits={24} courses={CORE} query={query} />
      <CourseSection number="02" label="DEPTH OF STUDY" credits={6} courses={DEPTH} query={query} />
      <CourseSection number="03" label="CAPSTONE" credits={3} courses={CAPSTONE} query={query} />

      <Text style={styles.footer}>{'</> 8 core · 2 depth · 1 capstone'}</Text>
    </ScrollView>
  );
};

// ---------- Internal styles ----------
const MONO = Platform.select({ ios: 'Menlo', android: 'monospace', default: 'monospace' });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F8',
  },
  content: {
    paddingBottom: 40,
  },

  // Header
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 28,
    backgroundColor: '#2D1B2E',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  logoFrame: {
    padding: 6,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#F06292',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 110,
    height: 110,
    borderRadius: 22,
  },
  title: {
    marginTop: 18,
    fontSize: 26,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  subtitle: {
    marginTop: 6,
    fontSize: 13,
    fontFamily: MONO,
    color: '#F8A5C2',
  },

  // Input
  inputWrap: {
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 8,
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2D1B2E',
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderWidth: 1.5,
    borderColor: '#E91E8C',
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    fontFamily: MONO,
    color: '#2D1B2E',
    backgroundColor: '#FFFFFF',
  },
  favorite: {
    marginTop: 8,
    fontSize: 12,
    fontFamily: MONO,
    color: '#C2185B',
  },

  // Cards
  card: {
    marginHorizontal: 20,
    marginTop: 18,
    padding: 16,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F8D7E4',
    shadowColor: '#C2185B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F8D7E4',
  },
  cardLabel: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: MONO,
    color: '#C2185B',
    letterSpacing: 0.5,
  },
  creditBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: '#FCE4EC',
  },
  creditText: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: MONO,
    color: '#AD1457',
  },

  // Course rows
  courseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  courseRowMatch: {
    backgroundColor: '#FCE4EC',
  },
  code: {
    width: 70,
    fontSize: 13,
    fontWeight: '700',
    fontFamily: MONO,
    color: '#8E5A73',
  },
  codeMatch: {
    color: '#E91E8C',
  },
  courseTitle: {
    flex: 1,
    fontSize: 15,
    color: '#2D1B2E',
  },

  footer: {
    marginTop: 26,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: MONO,
    color: '#B07A94',
  },
});

export default CoreComponents;