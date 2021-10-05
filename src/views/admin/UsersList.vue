<template>
    <div>
        <table class="styled-table">
            <thead>
                <!-- <tr>
                    <th ng-repeat="column in columns track by $index" class="center-text">
                        {{ column.title }}
                    </th>
                </tr> -->
            </thead>
            <tbody>
                <!-- <tr class="active-row" ng-repeat="row in data track by $index">
                    <td ng-repeat="column in columns track by $index">
                        {{column.showMethod(row[column.field])}}
                    </td>
                </tr> -->
            </tbody>
        </table>
    
    </div>
</template>

<script>
export default {
    name: 'UserListPage',
    data: () => ({

    }),
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
