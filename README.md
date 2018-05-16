# Localizer - Localize your Google Location History on a map

Here is how it works:

- Clone this repository;
- Set your Google API key (use sed for example: `sed -i 's/MY_GOOGLE_API_KEY/<YOUR KEY API HERE>/g' index.html`);
- Open `index.html` in a web browser;
- Load your **Google Location History** JSON file using the input file
  button (To retrieve this file, refer to the next chapter);
- Visualize on the displayed map where Google tracked you.

## Retrieve you **Google Location History**

1. Go to this page: https://takeout.google.com/settings/takeout ;

2. Unselect all products except **Location History (JSON Format)**;

3. Click **Next**, then **Create Archive**;

4. Download the created archive and extract the `.json` file contained.

## Author

Vincent Camus
