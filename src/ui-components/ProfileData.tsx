import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import MailIcon from "@material-ui/icons/Mail";

export type GraphData = {
  name: string;
  country: string;
  jobTitle: string;
};

export const ProfileData: React.FC<{ graphData: GraphData }> = ({
  graphData,
}) => {
  return (
    <List className="profileData">
      <NameListItem name={graphData.name} />
      <JobTitleListItem jobTitle={graphData.jobTitle} />
      <CountryListItem country={graphData.country}></CountryListItem>
    </List>
  );
};

const NameListItem: React.FC<{ name: string }> = ({ name }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <PersonIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Name" secondary={name} />
  </ListItem>
);

const JobTitleListItem: React.FC<{ jobTitle: string }> = ({ jobTitle }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <WorkIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Title" secondary={jobTitle} />
  </ListItem>
);

const CountryListItem: React.FC<{ country: string }> = ({ country }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <MailIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Country" secondary={country} />
  </ListItem>
);
