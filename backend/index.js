import express from "express"
const app = express();
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

//we will make a small array
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
    ];
    res.send(jokes);
}); 


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


 //type = module to show use modules js to assemmble all files.





