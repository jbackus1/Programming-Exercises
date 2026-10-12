# Input
The program accepts no user input. The data are hard-coded strings placed inside three Text components: my name, my degree program (MS in Computer Science), and my school (City University of Seattle).

# Process
App.js imports View, Text, and StyleSheet from React Native. The App function returns one View that acts as a container for the screen. StyleSheet.create defines the styles: the container uses flex: 1 so it fills the whole screen, a yellow background color, and centered alignment on both axes. A second style sets the font size, weight, and spacing for the text. The three Text components are nested inside the View and each uses the text style. Expo's Metro server bundles the JavaScript, and Expo Go on a phone or a web browser executes it.

# Output
The screen displays a yellow background with three bold, centered lines of text: my name, my degree program, and my school. The same result appears on a phone through Expo Go and in a browser.