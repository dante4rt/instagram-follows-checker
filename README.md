# Instagram Follows Checker

## Description

A tool for checking who is following you on Instagram and identifying those who do not follow you back. It compares your list of followers with those you are following and outputs the results to text files.

## Getting Started

To use this tool, you'll need to obtain your Instagram follower and following data in JSON format. Follow these steps to get the necessary files:

### Downloading Your Instagram Data

1. **Open Instagram**: Log into your Instagram account on a desktop or mobile browser.

2. **Go to Settings and Activity**: Click on your profile picture in the top right corner, select "Settings," and then navigate to "Activity."

3. **Access Accounts Center**:
   - Click on "Your account."
   - Choose "Accounts Center."

4. **Navigate to Your Information and Permissions**:
   - Go to "Your Information and Permissions."
   - Click on "Download your information."

5. **Request Your Data**:
   - Click on "Download or transfer information."
   - Select your Instagram account and press "Next."

6. **Select Information Type**:
   - Choose "Some of your information."
   - Tick the boxes for "Connections" and ensure "Followers and following" is selected.

7. **Download Options**:
   - Select "Download to device."
   - Set the date range to "All time."
   - Choose "JSON" for the format.
   - Set "Media quality" to "HIGH."
   - Press "Create files."

8. **Download the Files**:
   - Wait for the email from Instagram with the download link.
   - Download the files and extract the .zip archive.

### Preparing the Files

1. **Place the Files in the Project Directory**:
   - Extract the JSON files from the .zip archive.
   - Place the files (e.g., `following.json`, `followers_1.json`, `followers_2.json`, etc.) into the project directory.

2. **Install Dependencies**:
   - Open a terminal and navigate to the project directory.
   - Run `npm install` to install the necessary dependencies.

3. **Run the Checker**:
   - Execute `npm start` to start the checker.
   - The tool will process the data and generate `followingBack.txt` and `notFollowingBack.txt` files in the project directory.

## Usage

1. **Check the Output Files**:
   - `followingBack.txt`: Contains a list of users who are following you back.
   - `notFollowingBack.txt`: Contains a list of users who are not following you back.

2. **Review the Results**:
   - Open the `.txt` files to view the lists of Instagram users.

## Donations

If you would like to support the development of this project, you can make a donation using the following addresses:

- **Solana**: `GLQMG8j23ookY8Af1uLUg4CQzuQYhXcx56rkpZkyiJvP`
- **EVM**: `0x960EDa0D16f4D70df60629117ad6e5F1E13B8F44`
- **BTC**: `bc1p9za9ctgwwvc7amdng8gvrjpwhnhnwaxzj3nfv07szqwrsrudfh6qvvxrj8`

## Contributing

If you have suggestions or improvements, feel free to submit a pull request or open an issue.

## License

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for details.