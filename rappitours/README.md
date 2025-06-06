<div align="center">

# RappiTours Trails Management App

This folder contains the source code of the RappiTours Trails Management App

</div>

---

## How to Run

1. **Clone this Repository**
    ```bash
    git clone https://github.com/IMS-coding-projects/M248.git
    ```

2. **Enter Folder**
    ```bash
    cd ./M248/rappitours/
    ```

3. **Install Dependencies (Packages)**
     ```bash
     npm install --force
     ```
> [!IMPORTANT]
> You need to use the `--force` tag, because of a conflict between the react version and ui.shadcn. For more information, [visit this site](https://ui.shadcn.com/docs/react-19#:~:text=What's,do?)

4. **Copy and Modify Environment Variables**
    ```bash
    cp .env.example .env
    ```
> [!NOTE]
> You need to modify the `.env` file with your own environment variables. Check the `.env.example` file for which tokens/variables you need to set.
> If you do not have any tokens, you can contact us for a test token.

5. **Run the Project**
    ```bash
    npm run dev
    ```

6. **Open the Browser**
    Unless you manually changed the port, this app will run on [localhost:3000](http://localhost:3000)

> [!TIP]
> The app has default tours. One tour is from start on disabled, one will be disabled after 2 minutes and the third one after 2 hours.
>
> To refresh the default trails, you have to remove them from the localStorage. They are saved under the `trails` key.

---

## License

This project [is licensed](../LICENSE) under the GNU General Public License v3.0. To see what you can do, check out the [LICENSE](../LICENSE) page.
