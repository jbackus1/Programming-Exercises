# Input
The user types a favorite course into the TextInput box, which shows the placeholder "ex. CS624". The app also uses fixed data: the MSCS course names and the icon.png image from the assets folder.

# Process
CoreComponents is a functional component written as an arrow function. A ScrollView wraps the whole screen so the content can scroll on small devices. Inside it, View components group each course section, Text components display headings and course names, and an Image component shows icon.png. StyleSheet.create defines the internal styles, such as the yellow heading background, large bold heading text, and the bordered input box. React renders these components in order from top to bottom.

# Output
The screen displays the icon, the prompt "Which course did you like?", and the input box. Below it are three sections: eight core courses, two depth of study courses, and one capstone course. The user can scroll through the entire list, and the text they type appears in the input box.
