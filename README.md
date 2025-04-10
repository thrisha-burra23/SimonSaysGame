

# Simon Game

**Description**:  
This repository contains the code for a fun and interactive memory-based game inspired by the classic Simon game. Players must replicate the sequence of colors flashed on the screen by clicking the corresponding buttons. As levels increase, the sequence grows longer, challenging the player's memory and speed.



**How to Play**:
1. Press any key to start the game.
2. Observe the color sequence flashed on the screen.
3. Click the buttons to recreate the sequence in the correct order.
4. If you recreate the sequence successfully, you move to the next level, where the sequence becomes longer and more complex.
5. If you make a mistake, the game ends, displaying your score.



**Features**:
- **Dynamic Gameplay**: Each level introduces a random sequence of colors.
- **Interactive Visuals**: Buttons flash during gameplay for visual feedback.
- **Score Display**: The game tracks and displays your score upon game over.
- **Easy Reset**: Restart the game by pressing any key after a game over.



**Technologies Used**:
- **HTML**: For structuring the game elements.
- **CSS**: To style the buttons and create flashing effects.
- **JavaScript**: To implement the game logic and interactivity.



**Code Structure**:
- `gameSeq` & `userSeq`: Arrays to store the game and user sequences, respectively.
- `levelUp()`: Handles progression to the next level by generating a new random color.
- `checkAns(idx)`: Checks if the user's input matches the game's sequence.
- `gameFlash(btn)` & `userFlash(btn)`: Provide flashing effects for game and user interactions.
- `restart()`: Resets the game state for a fresh start.



**Getting Started**:
1. Clone the repository:
   ```
   git clone https://github.com/your-username/simon-game.git
   ```
2. Open the `index.html` file in a browser.
3. Enjoy the game!



**Future Improvements**:
- Add sound effects for each button to enhance user experience.
- Implement a high-score tracker to store the best score across sessions.
- Create a more responsive design for different screen sizes.

