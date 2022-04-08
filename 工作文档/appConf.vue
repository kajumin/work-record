<template>
  <div class="bg-color-white">
    <el-tabs v-model="activeName">
      <el-tab-pane label="平台配置列表" name="basis">
        <div class="conf-header flex padding-lr-df overflow-hidden">
          <div class="flex-1">
            <el-button type="primary"
              ><i class="el-icon-plus margin-right-xs"></i>添加</el-button
            >
            <el-button type="danger"
              ><i class="el-icon-close margin-right-xs"></i>删除</el-button
            >
          </div>
          <div>
            <el-input
              style="width:300px;margin: 0 20px;"
              v-model="pageParams.word"
              placeholder="关键字"
              @keyup.enter.native="getData"
            >
            </el-input>
            <el-button style="background: #f5f7fa" @click="getData"
              >搜索</el-button
            >
          </div>
        </div>

        <div class="overflow-hidden padding-lr-df margin-top-df">
          <el-table
            :data="tableList"
            style="width: 100%"
            stripe
            border
            class="margin-bottom-df"
          >
            <el-table-column
              prop="id"
              label="配置id"
              width="225"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="配置名称"
              width="220"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="name_en"
              label="配置英文名称"
              width="220"
              align="center"
            >
            </el-table-column>
            <el-table-column label="添加时间" width="180" align="center">
              <template slot-scope="scope">
                {{ scope.row.create_time | format }}
              </template>
            </el-table-column>
            <el-table-column label="最后修改时间" width="180" align="center">
              <template slot-scope="scope">
                {{ scope.row.update_time | format }}
              </template>
            </el-table-column>
            <el-table-column
              prop="state"
              label="状态"
              width="120"
              align="center"
            >
              <template slot-scope="scope">
                <el-button
                  v-if="scope.row.state"
                  type="success"
                  icon="el-icon-check"
                  circle
                ></el-button>
                <el-button
                  v-else-if="scope.row.state === 0"
                  type="danger"
                  icon="el-icon-close"
                  circle
                ></el-button>
                <span v-else>-</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="200" align="left">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="primary"
                  @click="changeAction('edit', scope.row)"
                  >编辑</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDel(scope.row.id)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
            <el-table-column label="管理" min-width="200" align="left">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="primary"
                  @click="
                    $router.push({
                      name: 'ConfItem',
                      query: {
                        id: scope.row.id,
                        groupName: scope.row.name_en,
                        appTypeId: $route.query.id
                      }
                    })
                  "
                  >配置项</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <m-pagination
            :pageParams="pageParams"
            @changePage="changePage"
          ></m-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'basis',
      pageParams: {
        page: 1,
        limit: 10,
        total: 0
      },
      tableList: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {},
    changePage(page) {
      this.pageParams.page = page
    }
  }
}
</script>
<style scoped></style>
