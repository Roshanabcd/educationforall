import pyautogui
import time

time.sleep(5)  # Gives you 5 seconds to focus on the chat box before execution

for _ in range(50):
    pyautogui.typewrite("Hello, this is an automated message!")  # Your message here
    pyautogui.press("enter")  # Press Enter
    time.sleep(0.5)  # Adjust delay to avoid detection
