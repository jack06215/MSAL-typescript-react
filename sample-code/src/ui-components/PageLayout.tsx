import Typography from "@material-ui/core/Typography";
import NavBar from "./NavBar";

export const PageLayout: React.FC<{}> = (props) => {
    return (
        <>
            <NavBar />
            <Typography variant="h5" align="center">Microsoft Authentication Library (MSAL) For React</Typography>
            <br/>
            <br/>
            {props.children}
        </>
    );
};