import { Grid, Stack } from '@mui/material';
import React, { useState } from 'react';
import Filter from './Filter';
import MentorCard from './MentorCard';
import { useNavigate } from 'react-router';

const MentorList = () => {

    const [column, setColumn] = useState(2)
    const navigate = useNavigate();
    return (
        <Stack spacing={2} pr={3}>
            <Filter column={column} setColumn={setColumn} />
            <Grid container columns={column} spacing={2}>
                <Grid item xs={1} onClick={() => navigate("1/view")}>
                    <MentorCard  />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
                <Grid item xs={1}>
                    <MentorCard />
                </Grid>
            </Grid>
        </Stack>
    );
}

export default MentorList;
