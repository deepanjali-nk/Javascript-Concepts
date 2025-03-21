# Whack-a-Mole Game

## Introduction
Whack-a-Mole is a simple interactive game that tests the player's reflexes. In this game, moles randomly appear in different holes, and the player has to click ("whack") them to earn points before they disappear.

## Making Moles Appear
In the game, the moles pop up randomly from different holes. Every few seconds, one of the holes will have a mole appear, and after a short time, it will disappear again. This keeps happening throughout the game, making it challenging for the player to react quickly and whack them in time.

## Whacking the Mole
1. **Use event delegation** to listen for clicks on the parent `div` (`#whack-a-mole`).
2. **Check if the clicked element** has the `mole` class.
3. **If a mole is hit**:
   - Increase the score.
   - Remove the `mole` class so it disappears.

Enjoy the game and have fun whacking moles!
