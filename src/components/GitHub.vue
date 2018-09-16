<template>
    <Card fromColor="#000" toColor="rgba(0,0,0,0)">
        <div slot="title">GitHub: Projects of the week</div>
        <div class="table-responsive">
            <table id="github_repos" class="table mb-2 table-hover table-sm table-dark bg-dark table-borderless"
                   style="white-space: nowrap; height: 308px; overflow-y: scroll; overflow-x: hidden; background-color: unset !important">
                <tbody style="display: table; white-space: normal;">
                <tr v-for="repo in repos">
                    <td style="padding-left: 1.25rem; padding-right: 1.25rem; line-height:1.0" scope=row>
                        <strong><a class="text-light" :href="repo.html_url" style="font-size: 12px;">{{
                            repo.full_name }}</a></strong>
                        <div>
                            <p class="mt-1 mb-1" style="font-size: 10px;white-space: pre-wrap;">{{ repo.description
                                }}</p>
                        </div>
                        <div>
                            <p class="mb-1 float-right align-text-bottom secondary-text" style="font-size: 10px;">
                                <font-awesome-icon icon="star"/>
                                {{ repo.stargazers_count }}
                                &nbsp;&nbsp;
                                <font-awesome-icon icon="code"/>
                                {{ repo.language }}
                            </p>
                        </div>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    </Card>
</template>
<script>
    import Card from '@/components/Card'
    import axios from 'axios'
    import moment from "moment";
    import SimpleBar from 'simplebar';
    import 'simplebar/dist/simplebar.css';
    export default {
        data() {
            return {
                repos: []
            }
        },
        components: {
            Card
        },
        mounted() {
            axios.get('https://api.github.com/search/repositories?q=created:%3E=2018-09-10&sort=stars&order=desc')
                .then(response => {
                    response.data.items.slice(0, 15).forEach(item => {
                        this.repos.push(item);
                        this.$nextTick(function () {
                            new SimpleBar(document.getElementById('github_repos'))
                        });
                    });
                });
        }
    }
</script>