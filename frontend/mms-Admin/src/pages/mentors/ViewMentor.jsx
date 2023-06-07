import { Box, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import MentorCardView from './MentorCardView'
import { Outlet } from 'react-router'
import { FilterList, Search } from '@mui/icons-material'

export default function ViewMentor() {
    return (
        <Grid container columns={4} mt={2} spacing={2}>
            <Grid item xs={1}>
                <Stack spacing={1} sx={{ maxHeight: "800px", overflowY: "scroll" }}>
                    <Stack direction={"row"} justifyContent={"space-between"} >
                        <Typography
                            color={"common.black"}
                            fontWeight={"bold"}
                            fontSize={24}
                        >Mentors</Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Search />
                        <FilterList />
                    </Stack>
                    <MentorCardView />
                    <MentorCardView />
                    <MentorCardView />
                    <MentorCardView />
                    <MentorCardView />
                    <MentorCardView />
                    <MentorCardView />
                    <MentorCardView />
                    <MentorCardView />
                    <MentorCardView />
                    <MentorCardView />
                    <MentorCardView />
                    <MentorCardView />
                    <MentorCardView />
                    <MentorCardView />
                    <MentorCardView />
                    <MentorCardView />
                    <MentorCardView />
                    <MentorCardView />
                </Stack>
            </Grid>
            <Grid item xs={3}>
                <Outlet />
            </Grid>
        </Grid >
    )
}
