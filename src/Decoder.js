import {
    Button,
    Card,
    CardContent,
    Grid,
    Icon,
    Paper,
    TextField,
    Typography,
    withStyles
} from "@material-ui/core";
import React from "react";

const useStyles = () => ({
    root: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 32,
        maxWidth: 400
    },
    output: {
        minHeight: 200,
        padding: 16
    }
});

class Alphabet extends React.Component {

    constructor(props) {
        super(props);

        const urlParams = new URLSearchParams(window.location.search);
        const input = urlParams.get('input');

        this.state = {
            input: input,
            output: this.processInput(input ?? '')
        }
    }

    processInput(input) {
        const letters = new Map()
        letters.set("cool_alex", "a")
        letters.set("bongocatblob", "b")
        letters.set("conner_portrait", "c")
        letters.set("dan_shy_guy", "d")
        letters.set("eddie_dont_blink", "e")
        letters.set("frozen_adam", "f")
        letters.set("gudetama", "g")
        letters.set("humm-troll", "h")
        letters.set("iso", "i")
        letters.set("catjam", "j")
        letters.set("kanye", "k")
        letters.set("luigi-adam", "l")
        letters.set("peeking-marilia", "m")
        letters.set("notlikethisblob", "n")
        letters.set("ollie", "o")
        letters.set("pepepog", "p")
        letters.set("qa", "q")
        letters.set("strong-as-reagan", "r")
        letters.set("sadblob", "s")
        letters.set("trump", "t")
        letters.set("uhhblob", "u")
        letters.set("vlad-thing", "v")
        letters.set("whycloseupblob", "w")
        letters.set("exploding_head", "x")
        letters.set("yay", "y")
        letters.set("zombie", "z")
        letters.set("a-a-ron", "A")
        letters.set("bobross", "B")
        letters.set("crazier-caz", "C")
        letters.set("psychic-dog", "D")
        letters.set("ethan-eating-fast", "E")
        letters.set("confusedpuppy", "F")
        letters.set("cool_retro_greg", "G")
        letters.set("hummbrella", "H")
        letters.set("bigchungus", "I")
        letters.set("dogjam ", "J")
        letters.set("cocktail-kanav", "K")
        letters.set("loveparrot", "L")
        letters.set("meh", "M")
        letters.set("notstonks", "N")
        letters.set("oofcloseupblob", "O")
        letters.set("party-cat", "P")
        letters.set("qa_bugcatcher", "Q")
        letters.set("rocket", "R")
        letters.set("suspicious", "S")
        letters.set("triggeredblob", "T")
        letters.set("yumyumblob", "U")
        letters.set("very-nice", "V")
        letters.set("wat", "W")
        letters.set("xzibit", "X")
        letters.set("yeet100", "Y")
        letters.set("zzz", "Z")

        var result = "";
        var splitStrings = input.split(":")
        var arrayLength = splitStrings.length;
        for (var i = 0; i < arrayLength; i++) {
            var word = splitStrings[i];
            var possibleEmoji = letters.get(word);
            if(possibleEmoji === undefined) possibleEmoji = word
            result += possibleEmoji
        }

        return result
    }

    onInputChanged(newValue) {
        this.setState({
            input: newValue,
            output: this.processInput(newValue)
        })
    }

    copyToClipboard() {
        navigator.clipboard.writeText(this.state.output)
    }

    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.root}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography component="h4" variant="h4" align="left" color="textPrimary" gutterBottom>
                                Decoder of Joy
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component="p" variant="p" align="left" color="textPrimary" gutterBottom>
                                Enter any text below, use *asterisks* for yellow:
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="input"
                                label="Input"
                                multiline
                                rows={4}
                                variant="outlined"
                                value={this.state.input}
                                onChange={(event) => this.onInputChanged(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component="p" variant="p" align="left" color="textPrimary" gutterBottom>
                                Copy and paste the output into a slack message:
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper
                                className={classes.output}
                                elevation={0}
                                variant="outlined"
                                rounded>
                                {this.state.output}
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                endIcon={<Icon>content_copy</Icon>}
                                onClick={() => this.copyToClipboard()}
                            >
                                Copy
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(useStyles)(Alphabet)