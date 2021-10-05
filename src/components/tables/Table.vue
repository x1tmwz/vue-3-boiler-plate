<template>
    <!-- <table>
                    <tr>
                        <th v-for="tableKey in tableKeys" :key="tableKey.value + tableKey.extraKey" :class="tableKey.value">
                            {{ tableKey.label }}
                        </th>
                    </tr>
                    <tr class="doHover" v-for="(data, index) in tableData" :key="index" @click="opitonClick($event, data.id, data)">
                        <td v-for="tableKey in tableKeys" :key="tableKey.value + data.id + tableKey.extraKey">
                            <div @click.stop="tableKey.buttonClick(data,$event)" v-if="tableKey.type == 'custom'" v-html="tableKey.showMethod(data)"></div>
                            <div style="color: blue" v-if="tableKey.value == 'parenetComaxId'">
                                {{ tableKey.showMethod(data[tableKey.value]) }}
                            </div>
                            <div v-if="
            							!tableKey.type &&
            								!(tableKey.value == 'parenetComaxId')
            						">
                                {{ tableKey.showMethod(data[tableKey.value]) }}
                            </div>
                        </td>
                    </tr>
                </table> -->
    <table class="styled-table">
        <thead>
            <tr>
                <th ng-repeat="column in columns track by $index" class="center-text">
                    {{ column.title }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="active-row" ng-repeat="row in data track by $index">
                <td ng-repeat="column in columns track by $index">
                    {{column.showMethod(row[column.field])}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
//TODO: change to stand alone table component -slot
export default {
    name: "Table",
    components: {},
    props: {
        headers: {
            type: Object,
            default: () => [{
                title: "exmple", //the title of colonm
                key: "id", //the key in row object that is in rows array
                showMethod: () => {
                    return this.key //how to show the value in th row
                },
                type:""//if is button i will do something else it will ignore title and will set it to button that will emit event in the name of title  
            }]
        },
        rows: {
            type: Array,
            default: () => []
        },
        primeKey: {
            type: String,
            default: () => ""//a key with will be return on click on row 
        }
    },
    data: () => ({
        tableKeys: []
    }),
    created() {
        this.tableKeys = this.keys;
    },
    computed: {
        tableData: function() {
            return this.data;
        }
    },
    methods: {}
};
</script>

<style lang="scss">

</style>
