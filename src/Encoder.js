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
        letters.set('a', ":cool_alex:")
        letters.set('b', ":bongocatblob:")
        letters.set('c', ":conner_portrait:")
        letters.set('d', ":dan_shy_guy:")
        letters.set('e', ":eddie_dont_blink:")
        letters.set('f', ":frozen_adam:")
        letters.set('g', ":gudetama:")
        letters.set('h', ":humm-troll:")
        letters.set('i', ":iso:")
        letters.set('j', ":catjam:")
        letters.set('k', ":kanye:")
        letters.set('l', ":luigi-adam:")
        letters.set('m', ":peeking-marilia:")
        letters.set('n', ":notlikethisblob:")
        letters.set('o', ":ollie:")
        letters.set('p', ":pepepog:")
        letters.set('q', ":qa:")
        letters.set('r', ":strong-as-reagan:")
        letters.set('s', ":sadblob:")
        letters.set('t', ":trump:")
        letters.set('u', ":uhhblob:")
        letters.set('v', ":vlad-thing:")
        letters.set('w', ":whycloseupblob:")
        letters.set('x', ":exploding_head:")
        letters.set('y', ":yay:")
        letters.set('z', ":zombie:")

        letters.set('A', ":a-a-ron:")
        letters.set('B', ":bobross:")
        letters.set('C', ":crazier-caz:")
        letters.set('D', ":psychic-dog:")
        letters.set('E', ":ethan-eating-fast:")
        letters.set('F', ":confusedpuppy:")
        letters.set('G', ":cool_retro_greg:")
        letters.set('H', ":hummbrella:")
        letters.set('I', ":bigchungus:")
        letters.set('J', ":dogjam: ")
        letters.set('K', ":cocktail-kanav:")
        letters.set('L', ":loveparrot:")
        letters.set('M', ":meh:")
        letters.set('N', ":notstonks:")
        letters.set('O', ":oofcloseupblob:")
        letters.set('P', ":party-cat:")
        letters.set('Q', ":qa_bugcatcher:")
        letters.set('R', ":rocket:")
        letters.set('S', ":suspicious:")
        letters.set('T', ":triggeredblob:")
        letters.set('U', ":yumyumblob:")
        letters.set('V', ":very-nice:")
        letters.set('W', ":wat:")
        letters.set('X', ":xzibit:")
        letters.set('Y', ":yeet100:")
        letters.set('Z', ":zzz:")

        var result = "";
        var isYellow = false;
        for (var i = 0; i < input.length; i++) {
            var char = input.charAt(i);
            if (char === "*") {
                isYellow = !isYellow;
            } else if (char === " ") {
                result += "   ";
            } else if (char === "\n") {
                result += "\n";
            } else {
                if (char === "!") {
                    char = "exclamation"
                } else if (char === "?") {
                    char = "question"
                } else if (char === "#") {
                    char = "hash"
                }
                var test = letters.get(char)
                if (test === undefined) test = char
                result += test
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
        const { classes } = this.props;
        return (
            <Card className={classes.root}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography component="h4" variant="h4" align="left" color="textPrimary" gutterBottom>
                                Encoder of Joy
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