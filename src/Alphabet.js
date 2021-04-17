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
        // this replaces a given character with its
        // :alphabet-white- equivalent
        const characterReplaceMap = {
            "!": "exclamation",
            "?": "question",
            "#": "hash",
            "@": "at"
        };

        // this replaces a given character with its
        // specified emoji equivalent
        const emojiMap = {
            "0": ":zero:",
            "1": ":one:",
            "2": ":two:",
            "3": ":three:",
            "4": ":four:",
            "5": ":five:",
            "6": ":six:",
            "7": ":seven:",
            "8": ":eight:",
            "9": ":nine:",
            "$": ":heavy_dollar_sign:"
        }

        let result = "";
        let isYellow = false;
        const lowercased = input.toLowerCase();

        for (let i = 0; i < lowercased.length; i++) {
            let char = lowercased.charAt(i);
            if (char in emojiMap) {
                result += emojiMap[char]
            } else if (!char.match(/[a-z*!#?@ ]/)) {
                result += char
            } else if (char === "*") {
                isYellow = !isYellow;
            } else if (char === " ") {
                result += "   ";
            } else {
                if (char in characterReplaceMap) {
                    char = characterReplaceMap[char]
                }
                const prefix = isYellow ? ":alphabet-yellow-" : ":alphabet-white-";
                result += prefix + char + ":"
            }
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
                                Alphabet of Joy
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