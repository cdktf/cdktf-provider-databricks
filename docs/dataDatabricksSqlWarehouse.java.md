# `dataDatabricksSqlWarehouse` Submodule <a name="`dataDatabricksSqlWarehouse` Submodule" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSqlWarehouse <a name="DataDatabricksSqlWarehouse" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse databricks_sql_warehouse}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouse;

DataDatabricksSqlWarehouse.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .autoStopMins(java.lang.Number)
//  .channel(DataDatabricksSqlWarehouseChannel)
//  .clusterSize(java.lang.String)
//  .creatorName(java.lang.String)
//  .dataSourceId(java.lang.String)
//  .enablePhoton(java.lang.Boolean)
//  .enablePhoton(IResolvable)
//  .enableServerlessCompute(java.lang.Boolean)
//  .enableServerlessCompute(IResolvable)
//  .health(DataDatabricksSqlWarehouseHealth)
//  .id(java.lang.String)
//  .instanceProfileArn(java.lang.String)
//  .jdbcUrl(java.lang.String)
//  .maxNumClusters(java.lang.Number)
//  .minNumClusters(java.lang.Number)
//  .name(java.lang.String)
//  .numActiveSessions(java.lang.Number)
//  .numClusters(java.lang.Number)
//  .odbcParams(DataDatabricksSqlWarehouseOdbcParams)
//  .spotInstancePolicy(java.lang.String)
//  .state(java.lang.String)
//  .tags(DataDatabricksSqlWarehouseTags)
//  .warehouseType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.autoStopMins">autoStopMins</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#auto_stop_mins DataDatabricksSqlWarehouse#auto_stop_mins}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.channel">channel</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a></code> | channel block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.clusterSize">clusterSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#cluster_size DataDatabricksSqlWarehouse#cluster_size}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.creatorName">creatorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#creator_name DataDatabricksSqlWarehouse#creator_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#data_source_id DataDatabricksSqlWarehouse#data_source_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.enablePhoton">enablePhoton</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#enable_photon DataDatabricksSqlWarehouse#enable_photon}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.enableServerlessCompute">enableServerlessCompute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#enable_serverless_compute DataDatabricksSqlWarehouse#enable_serverless_compute}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.health">health</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#id DataDatabricksSqlWarehouse#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#instance_profile_arn DataDatabricksSqlWarehouse#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.jdbcUrl">jdbcUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#jdbc_url DataDatabricksSqlWarehouse#jdbc_url}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.maxNumClusters">maxNumClusters</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#max_num_clusters DataDatabricksSqlWarehouse#max_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.minNumClusters">minNumClusters</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#min_num_clusters DataDatabricksSqlWarehouse#min_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.numActiveSessions">numActiveSessions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#num_active_sessions DataDatabricksSqlWarehouse#num_active_sessions}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.numClusters">numClusters</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#num_clusters DataDatabricksSqlWarehouse#num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.odbcParams">odbcParams</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a></code> | odbc_params block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.spotInstancePolicy">spotInstancePolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#spot_instance_policy DataDatabricksSqlWarehouse#spot_instance_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#state DataDatabricksSqlWarehouse#state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a></code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.warehouseType">warehouseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#warehouse_type DataDatabricksSqlWarehouse#warehouse_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoStopMins`<sup>Optional</sup> <a name="autoStopMins" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.autoStopMins"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#auto_stop_mins DataDatabricksSqlWarehouse#auto_stop_mins}.

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.channel"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a>

channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#channel DataDatabricksSqlWarehouse#channel}

---

##### `clusterSize`<sup>Optional</sup> <a name="clusterSize" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.clusterSize"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#cluster_size DataDatabricksSqlWarehouse#cluster_size}.

---

##### `creatorName`<sup>Optional</sup> <a name="creatorName" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.creatorName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#creator_name DataDatabricksSqlWarehouse#creator_name}.

---

##### `dataSourceId`<sup>Optional</sup> <a name="dataSourceId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.dataSourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#data_source_id DataDatabricksSqlWarehouse#data_source_id}.

---

##### `enablePhoton`<sup>Optional</sup> <a name="enablePhoton" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.enablePhoton"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#enable_photon DataDatabricksSqlWarehouse#enable_photon}.

---

##### `enableServerlessCompute`<sup>Optional</sup> <a name="enableServerlessCompute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.enableServerlessCompute"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#enable_serverless_compute DataDatabricksSqlWarehouse#enable_serverless_compute}.

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.health"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a>

health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#health DataDatabricksSqlWarehouse#health}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#id DataDatabricksSqlWarehouse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.instanceProfileArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#instance_profile_arn DataDatabricksSqlWarehouse#instance_profile_arn}.

---

##### `jdbcUrl`<sup>Optional</sup> <a name="jdbcUrl" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.jdbcUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#jdbc_url DataDatabricksSqlWarehouse#jdbc_url}.

---

##### `maxNumClusters`<sup>Optional</sup> <a name="maxNumClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.maxNumClusters"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#max_num_clusters DataDatabricksSqlWarehouse#max_num_clusters}.

---

##### `minNumClusters`<sup>Optional</sup> <a name="minNumClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.minNumClusters"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#min_num_clusters DataDatabricksSqlWarehouse#min_num_clusters}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}.

---

##### `numActiveSessions`<sup>Optional</sup> <a name="numActiveSessions" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.numActiveSessions"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#num_active_sessions DataDatabricksSqlWarehouse#num_active_sessions}.

---

##### `numClusters`<sup>Optional</sup> <a name="numClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.numClusters"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#num_clusters DataDatabricksSqlWarehouse#num_clusters}.

---

##### `odbcParams`<sup>Optional</sup> <a name="odbcParams" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.odbcParams"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a>

odbc_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#odbc_params DataDatabricksSqlWarehouse#odbc_params}

---

##### `spotInstancePolicy`<sup>Optional</sup> <a name="spotInstancePolicy" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.spotInstancePolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#spot_instance_policy DataDatabricksSqlWarehouse#spot_instance_policy}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#state DataDatabricksSqlWarehouse#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.tags"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#tags DataDatabricksSqlWarehouse#tags}

---

##### `warehouseType`<sup>Optional</sup> <a name="warehouseType" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.warehouseType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#warehouse_type DataDatabricksSqlWarehouse#warehouse_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putChannel">putChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putHealth">putHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putOdbcParams">putOdbcParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetAutoStopMins">resetAutoStopMins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetClusterSize">resetClusterSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetCreatorName">resetCreatorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetDataSourceId">resetDataSourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetEnablePhoton">resetEnablePhoton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetEnableServerlessCompute">resetEnableServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetHealth">resetHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetJdbcUrl">resetJdbcUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetMaxNumClusters">resetMaxNumClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetMinNumClusters">resetMinNumClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetNumActiveSessions">resetNumActiveSessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetNumClusters">resetNumClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetOdbcParams">resetOdbcParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetSpotInstancePolicy">resetSpotInstancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetWarehouseType">resetWarehouseType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putChannel` <a name="putChannel" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putChannel"></a>

```java
public void putChannel(DataDatabricksSqlWarehouseChannel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putChannel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a>

---

##### `putHealth` <a name="putHealth" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putHealth"></a>

```java
public void putHealth(DataDatabricksSqlWarehouseHealth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a>

---

##### `putOdbcParams` <a name="putOdbcParams" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putOdbcParams"></a>

```java
public void putOdbcParams(DataDatabricksSqlWarehouseOdbcParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putOdbcParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putTags"></a>

```java
public void putTags(DataDatabricksSqlWarehouseTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a>

---

##### `resetAutoStopMins` <a name="resetAutoStopMins" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetAutoStopMins"></a>

```java
public void resetAutoStopMins()
```

##### `resetChannel` <a name="resetChannel" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetChannel"></a>

```java
public void resetChannel()
```

##### `resetClusterSize` <a name="resetClusterSize" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetClusterSize"></a>

```java
public void resetClusterSize()
```

##### `resetCreatorName` <a name="resetCreatorName" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetCreatorName"></a>

```java
public void resetCreatorName()
```

##### `resetDataSourceId` <a name="resetDataSourceId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetDataSourceId"></a>

```java
public void resetDataSourceId()
```

##### `resetEnablePhoton` <a name="resetEnablePhoton" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetEnablePhoton"></a>

```java
public void resetEnablePhoton()
```

##### `resetEnableServerlessCompute` <a name="resetEnableServerlessCompute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetEnableServerlessCompute"></a>

```java
public void resetEnableServerlessCompute()
```

##### `resetHealth` <a name="resetHealth" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetHealth"></a>

```java
public void resetHealth()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetInstanceProfileArn"></a>

```java
public void resetInstanceProfileArn()
```

##### `resetJdbcUrl` <a name="resetJdbcUrl" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetJdbcUrl"></a>

```java
public void resetJdbcUrl()
```

##### `resetMaxNumClusters` <a name="resetMaxNumClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetMaxNumClusters"></a>

```java
public void resetMaxNumClusters()
```

##### `resetMinNumClusters` <a name="resetMinNumClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetMinNumClusters"></a>

```java
public void resetMinNumClusters()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetName"></a>

```java
public void resetName()
```

##### `resetNumActiveSessions` <a name="resetNumActiveSessions" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetNumActiveSessions"></a>

```java
public void resetNumActiveSessions()
```

##### `resetNumClusters` <a name="resetNumClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetNumClusters"></a>

```java
public void resetNumClusters()
```

##### `resetOdbcParams` <a name="resetOdbcParams" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetOdbcParams"></a>

```java
public void resetOdbcParams()
```

##### `resetSpotInstancePolicy` <a name="resetSpotInstancePolicy" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetSpotInstancePolicy"></a>

```java
public void resetSpotInstancePolicy()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetState"></a>

```java
public void resetState()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetTags"></a>

```java
public void resetTags()
```

##### `resetWarehouseType` <a name="resetWarehouseType" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetWarehouseType"></a>

```java
public void resetWarehouseType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksSqlWarehouse resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouse;

DataDatabricksSqlWarehouse.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouse;

DataDatabricksSqlWarehouse.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouse;

DataDatabricksSqlWarehouse.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouse;

DataDatabricksSqlWarehouse.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksSqlWarehouse.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksSqlWarehouse resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksSqlWarehouse to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksSqlWarehouse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksSqlWarehouse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.channel">channel</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference">DataDatabricksSqlWarehouseChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.health">health</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference">DataDatabricksSqlWarehouseHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.odbcParams">odbcParams</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference">DataDatabricksSqlWarehouseOdbcParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference">DataDatabricksSqlWarehouseTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.autoStopMinsInput">autoStopMinsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.channelInput">channelInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.clusterSizeInput">clusterSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.creatorNameInput">creatorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enablePhotonInput">enablePhotonInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enableServerlessComputeInput">enableServerlessComputeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.healthInput">healthInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.jdbcUrlInput">jdbcUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.maxNumClustersInput">maxNumClustersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.minNumClustersInput">minNumClustersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numActiveSessionsInput">numActiveSessionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numClustersInput">numClustersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.odbcParamsInput">odbcParamsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.spotInstancePolicyInput">spotInstancePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.warehouseTypeInput">warehouseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.autoStopMins">autoStopMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.clusterSize">clusterSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.creatorName">creatorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enablePhoton">enablePhoton</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enableServerlessCompute">enableServerlessCompute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.jdbcUrl">jdbcUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.maxNumClusters">maxNumClusters</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.minNumClusters">minNumClusters</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numActiveSessions">numActiveSessions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numClusters">numClusters</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.spotInstancePolicy">spotInstancePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.warehouseType">warehouseType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.channel"></a>

```java
public DataDatabricksSqlWarehouseChannelOutputReference getChannel();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference">DataDatabricksSqlWarehouseChannelOutputReference</a>

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.health"></a>

```java
public DataDatabricksSqlWarehouseHealthOutputReference getHealth();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference">DataDatabricksSqlWarehouseHealthOutputReference</a>

---

##### `odbcParams`<sup>Required</sup> <a name="odbcParams" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.odbcParams"></a>

```java
public DataDatabricksSqlWarehouseOdbcParamsOutputReference getOdbcParams();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference">DataDatabricksSqlWarehouseOdbcParamsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.tags"></a>

```java
public DataDatabricksSqlWarehouseTagsOutputReference getTags();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference">DataDatabricksSqlWarehouseTagsOutputReference</a>

---

##### `autoStopMinsInput`<sup>Optional</sup> <a name="autoStopMinsInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.autoStopMinsInput"></a>

```java
public java.lang.Number getAutoStopMinsInput();
```

- *Type:* java.lang.Number

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.channelInput"></a>

```java
public DataDatabricksSqlWarehouseChannel getChannelInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a>

---

##### `clusterSizeInput`<sup>Optional</sup> <a name="clusterSizeInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.clusterSizeInput"></a>

```java
public java.lang.String getClusterSizeInput();
```

- *Type:* java.lang.String

---

##### `creatorNameInput`<sup>Optional</sup> <a name="creatorNameInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.creatorNameInput"></a>

```java
public java.lang.String getCreatorNameInput();
```

- *Type:* java.lang.String

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.dataSourceIdInput"></a>

```java
public java.lang.String getDataSourceIdInput();
```

- *Type:* java.lang.String

---

##### `enablePhotonInput`<sup>Optional</sup> <a name="enablePhotonInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enablePhotonInput"></a>

```java
public java.lang.Object getEnablePhotonInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableServerlessComputeInput`<sup>Optional</sup> <a name="enableServerlessComputeInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enableServerlessComputeInput"></a>

```java
public java.lang.Object getEnableServerlessComputeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthInput`<sup>Optional</sup> <a name="healthInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.healthInput"></a>

```java
public DataDatabricksSqlWarehouseHealth getHealthInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.instanceProfileArnInput"></a>

```java
public java.lang.String getInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `jdbcUrlInput`<sup>Optional</sup> <a name="jdbcUrlInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.jdbcUrlInput"></a>

```java
public java.lang.String getJdbcUrlInput();
```

- *Type:* java.lang.String

---

##### `maxNumClustersInput`<sup>Optional</sup> <a name="maxNumClustersInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.maxNumClustersInput"></a>

```java
public java.lang.Number getMaxNumClustersInput();
```

- *Type:* java.lang.Number

---

##### `minNumClustersInput`<sup>Optional</sup> <a name="minNumClustersInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.minNumClustersInput"></a>

```java
public java.lang.Number getMinNumClustersInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `numActiveSessionsInput`<sup>Optional</sup> <a name="numActiveSessionsInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numActiveSessionsInput"></a>

```java
public java.lang.Number getNumActiveSessionsInput();
```

- *Type:* java.lang.Number

---

##### `numClustersInput`<sup>Optional</sup> <a name="numClustersInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numClustersInput"></a>

```java
public java.lang.Number getNumClustersInput();
```

- *Type:* java.lang.Number

---

##### `odbcParamsInput`<sup>Optional</sup> <a name="odbcParamsInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.odbcParamsInput"></a>

```java
public DataDatabricksSqlWarehouseOdbcParams getOdbcParamsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a>

---

##### `spotInstancePolicyInput`<sup>Optional</sup> <a name="spotInstancePolicyInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.spotInstancePolicyInput"></a>

```java
public java.lang.String getSpotInstancePolicyInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.tagsInput"></a>

```java
public DataDatabricksSqlWarehouseTags getTagsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a>

---

##### `warehouseTypeInput`<sup>Optional</sup> <a name="warehouseTypeInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.warehouseTypeInput"></a>

```java
public java.lang.String getWarehouseTypeInput();
```

- *Type:* java.lang.String

---

##### `autoStopMins`<sup>Required</sup> <a name="autoStopMins" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.autoStopMins"></a>

```java
public java.lang.Number getAutoStopMins();
```

- *Type:* java.lang.Number

---

##### `clusterSize`<sup>Required</sup> <a name="clusterSize" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.clusterSize"></a>

```java
public java.lang.String getClusterSize();
```

- *Type:* java.lang.String

---

##### `creatorName`<sup>Required</sup> <a name="creatorName" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.creatorName"></a>

```java
public java.lang.String getCreatorName();
```

- *Type:* java.lang.String

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `enablePhoton`<sup>Required</sup> <a name="enablePhoton" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enablePhoton"></a>

```java
public java.lang.Object getEnablePhoton();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableServerlessCompute`<sup>Required</sup> <a name="enableServerlessCompute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enableServerlessCompute"></a>

```java
public java.lang.Object getEnableServerlessCompute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `jdbcUrl`<sup>Required</sup> <a name="jdbcUrl" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.jdbcUrl"></a>

```java
public java.lang.String getJdbcUrl();
```

- *Type:* java.lang.String

---

##### `maxNumClusters`<sup>Required</sup> <a name="maxNumClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.maxNumClusters"></a>

```java
public java.lang.Number getMaxNumClusters();
```

- *Type:* java.lang.Number

---

##### `minNumClusters`<sup>Required</sup> <a name="minNumClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.minNumClusters"></a>

```java
public java.lang.Number getMinNumClusters();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `numActiveSessions`<sup>Required</sup> <a name="numActiveSessions" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numActiveSessions"></a>

```java
public java.lang.Number getNumActiveSessions();
```

- *Type:* java.lang.Number

---

##### `numClusters`<sup>Required</sup> <a name="numClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numClusters"></a>

```java
public java.lang.Number getNumClusters();
```

- *Type:* java.lang.Number

---

##### `spotInstancePolicy`<sup>Required</sup> <a name="spotInstancePolicy" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.spotInstancePolicy"></a>

```java
public java.lang.String getSpotInstancePolicy();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `warehouseType`<sup>Required</sup> <a name="warehouseType" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.warehouseType"></a>

```java
public java.lang.String getWarehouseType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSqlWarehouseChannel <a name="DataDatabricksSqlWarehouseChannel" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouseChannel;

DataDatabricksSqlWarehouseChannel.builder()
//  .dbsqlVersion(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel.property.dbsqlVersion">dbsqlVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#dbsql_version DataDatabricksSqlWarehouse#dbsql_version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}. |

---

##### `dbsqlVersion`<sup>Optional</sup> <a name="dbsqlVersion" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel.property.dbsqlVersion"></a>

```java
public java.lang.String getDbsqlVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#dbsql_version DataDatabricksSqlWarehouse#dbsql_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}.

---

### DataDatabricksSqlWarehouseConfig <a name="DataDatabricksSqlWarehouseConfig" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouseConfig;

DataDatabricksSqlWarehouseConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .autoStopMins(java.lang.Number)
//  .channel(DataDatabricksSqlWarehouseChannel)
//  .clusterSize(java.lang.String)
//  .creatorName(java.lang.String)
//  .dataSourceId(java.lang.String)
//  .enablePhoton(java.lang.Boolean)
//  .enablePhoton(IResolvable)
//  .enableServerlessCompute(java.lang.Boolean)
//  .enableServerlessCompute(IResolvable)
//  .health(DataDatabricksSqlWarehouseHealth)
//  .id(java.lang.String)
//  .instanceProfileArn(java.lang.String)
//  .jdbcUrl(java.lang.String)
//  .maxNumClusters(java.lang.Number)
//  .minNumClusters(java.lang.Number)
//  .name(java.lang.String)
//  .numActiveSessions(java.lang.Number)
//  .numClusters(java.lang.Number)
//  .odbcParams(DataDatabricksSqlWarehouseOdbcParams)
//  .spotInstancePolicy(java.lang.String)
//  .state(java.lang.String)
//  .tags(DataDatabricksSqlWarehouseTags)
//  .warehouseType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.autoStopMins">autoStopMins</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#auto_stop_mins DataDatabricksSqlWarehouse#auto_stop_mins}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.channel">channel</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a></code> | channel block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.clusterSize">clusterSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#cluster_size DataDatabricksSqlWarehouse#cluster_size}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.creatorName">creatorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#creator_name DataDatabricksSqlWarehouse#creator_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#data_source_id DataDatabricksSqlWarehouse#data_source_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.enablePhoton">enablePhoton</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#enable_photon DataDatabricksSqlWarehouse#enable_photon}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.enableServerlessCompute">enableServerlessCompute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#enable_serverless_compute DataDatabricksSqlWarehouse#enable_serverless_compute}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.health">health</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#id DataDatabricksSqlWarehouse#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#instance_profile_arn DataDatabricksSqlWarehouse#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.jdbcUrl">jdbcUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#jdbc_url DataDatabricksSqlWarehouse#jdbc_url}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.maxNumClusters">maxNumClusters</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#max_num_clusters DataDatabricksSqlWarehouse#max_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.minNumClusters">minNumClusters</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#min_num_clusters DataDatabricksSqlWarehouse#min_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.numActiveSessions">numActiveSessions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#num_active_sessions DataDatabricksSqlWarehouse#num_active_sessions}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.numClusters">numClusters</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#num_clusters DataDatabricksSqlWarehouse#num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.odbcParams">odbcParams</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a></code> | odbc_params block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.spotInstancePolicy">spotInstancePolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#spot_instance_policy DataDatabricksSqlWarehouse#spot_instance_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#state DataDatabricksSqlWarehouse#state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a></code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.warehouseType">warehouseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#warehouse_type DataDatabricksSqlWarehouse#warehouse_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoStopMins`<sup>Optional</sup> <a name="autoStopMins" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.autoStopMins"></a>

```java
public java.lang.Number getAutoStopMins();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#auto_stop_mins DataDatabricksSqlWarehouse#auto_stop_mins}.

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.channel"></a>

```java
public DataDatabricksSqlWarehouseChannel getChannel();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a>

channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#channel DataDatabricksSqlWarehouse#channel}

---

##### `clusterSize`<sup>Optional</sup> <a name="clusterSize" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.clusterSize"></a>

```java
public java.lang.String getClusterSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#cluster_size DataDatabricksSqlWarehouse#cluster_size}.

---

##### `creatorName`<sup>Optional</sup> <a name="creatorName" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.creatorName"></a>

```java
public java.lang.String getCreatorName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#creator_name DataDatabricksSqlWarehouse#creator_name}.

---

##### `dataSourceId`<sup>Optional</sup> <a name="dataSourceId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#data_source_id DataDatabricksSqlWarehouse#data_source_id}.

---

##### `enablePhoton`<sup>Optional</sup> <a name="enablePhoton" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.enablePhoton"></a>

```java
public java.lang.Object getEnablePhoton();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#enable_photon DataDatabricksSqlWarehouse#enable_photon}.

---

##### `enableServerlessCompute`<sup>Optional</sup> <a name="enableServerlessCompute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.enableServerlessCompute"></a>

```java
public java.lang.Object getEnableServerlessCompute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#enable_serverless_compute DataDatabricksSqlWarehouse#enable_serverless_compute}.

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.health"></a>

```java
public DataDatabricksSqlWarehouseHealth getHealth();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a>

health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#health DataDatabricksSqlWarehouse#health}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#id DataDatabricksSqlWarehouse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#instance_profile_arn DataDatabricksSqlWarehouse#instance_profile_arn}.

---

##### `jdbcUrl`<sup>Optional</sup> <a name="jdbcUrl" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.jdbcUrl"></a>

```java
public java.lang.String getJdbcUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#jdbc_url DataDatabricksSqlWarehouse#jdbc_url}.

---

##### `maxNumClusters`<sup>Optional</sup> <a name="maxNumClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.maxNumClusters"></a>

```java
public java.lang.Number getMaxNumClusters();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#max_num_clusters DataDatabricksSqlWarehouse#max_num_clusters}.

---

##### `minNumClusters`<sup>Optional</sup> <a name="minNumClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.minNumClusters"></a>

```java
public java.lang.Number getMinNumClusters();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#min_num_clusters DataDatabricksSqlWarehouse#min_num_clusters}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}.

---

##### `numActiveSessions`<sup>Optional</sup> <a name="numActiveSessions" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.numActiveSessions"></a>

```java
public java.lang.Number getNumActiveSessions();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#num_active_sessions DataDatabricksSqlWarehouse#num_active_sessions}.

---

##### `numClusters`<sup>Optional</sup> <a name="numClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.numClusters"></a>

```java
public java.lang.Number getNumClusters();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#num_clusters DataDatabricksSqlWarehouse#num_clusters}.

---

##### `odbcParams`<sup>Optional</sup> <a name="odbcParams" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.odbcParams"></a>

```java
public DataDatabricksSqlWarehouseOdbcParams getOdbcParams();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a>

odbc_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#odbc_params DataDatabricksSqlWarehouse#odbc_params}

---

##### `spotInstancePolicy`<sup>Optional</sup> <a name="spotInstancePolicy" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.spotInstancePolicy"></a>

```java
public java.lang.String getSpotInstancePolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#spot_instance_policy DataDatabricksSqlWarehouse#spot_instance_policy}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#state DataDatabricksSqlWarehouse#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.tags"></a>

```java
public DataDatabricksSqlWarehouseTags getTags();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#tags DataDatabricksSqlWarehouse#tags}

---

##### `warehouseType`<sup>Optional</sup> <a name="warehouseType" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.warehouseType"></a>

```java
public java.lang.String getWarehouseType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#warehouse_type DataDatabricksSqlWarehouse#warehouse_type}.

---

### DataDatabricksSqlWarehouseHealth <a name="DataDatabricksSqlWarehouseHealth" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouseHealth;

DataDatabricksSqlWarehouseHealth.builder()
//  .details(java.lang.String)
//  .failureReason(DataDatabricksSqlWarehouseHealthFailureReason)
//  .message(java.lang.String)
//  .status(java.lang.String)
//  .summary(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.details">details</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#details DataDatabricksSqlWarehouse#details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.failureReason">failureReason</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a></code> | failure_reason block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#message DataDatabricksSqlWarehouse#message}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#status DataDatabricksSqlWarehouse#status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.summary">summary</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#summary DataDatabricksSqlWarehouse#summary}. |

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.details"></a>

```java
public java.lang.String getDetails();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#details DataDatabricksSqlWarehouse#details}.

---

##### `failureReason`<sup>Optional</sup> <a name="failureReason" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.failureReason"></a>

```java
public DataDatabricksSqlWarehouseHealthFailureReason getFailureReason();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a>

failure_reason block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#failure_reason DataDatabricksSqlWarehouse#failure_reason}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#message DataDatabricksSqlWarehouse#message}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#status DataDatabricksSqlWarehouse#status}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#summary DataDatabricksSqlWarehouse#summary}.

---

### DataDatabricksSqlWarehouseHealthFailureReason <a name="DataDatabricksSqlWarehouseHealthFailureReason" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouseHealthFailureReason;

DataDatabricksSqlWarehouseHealthFailureReason.builder()
//  .code(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.property.code">code</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#code DataDatabricksSqlWarehouse#code}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#parameters DataDatabricksSqlWarehouse#parameters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#type DataDatabricksSqlWarehouse#type}. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#code DataDatabricksSqlWarehouse#code}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#parameters DataDatabricksSqlWarehouse#parameters}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#type DataDatabricksSqlWarehouse#type}.

---

### DataDatabricksSqlWarehouseOdbcParams <a name="DataDatabricksSqlWarehouseOdbcParams" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouseOdbcParams;

DataDatabricksSqlWarehouseOdbcParams.builder()
//  .hostname(java.lang.String)
//  .path(java.lang.String)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#hostname DataDatabricksSqlWarehouse#hostname}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#path DataDatabricksSqlWarehouse#path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#port DataDatabricksSqlWarehouse#port}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#protocol DataDatabricksSqlWarehouse#protocol}. |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#hostname DataDatabricksSqlWarehouse#hostname}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#path DataDatabricksSqlWarehouse#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#port DataDatabricksSqlWarehouse#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#protocol DataDatabricksSqlWarehouse#protocol}.

---

### DataDatabricksSqlWarehouseTags <a name="DataDatabricksSqlWarehouseTags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouseTags;

DataDatabricksSqlWarehouseTags.builder()
//  .customTags(IResolvable)
//  .customTags(java.util.List<DataDatabricksSqlWarehouseTagsCustomTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags.property.customTags">customTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a>></code> | custom_tags block. |

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags.property.customTags"></a>

```java
public java.lang.Object getCustomTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a>>

custom_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#custom_tags DataDatabricksSqlWarehouse#custom_tags}

---

### DataDatabricksSqlWarehouseTagsCustomTags <a name="DataDatabricksSqlWarehouseTagsCustomTags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouseTagsCustomTags;

DataDatabricksSqlWarehouseTagsCustomTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#key DataDatabricksSqlWarehouse#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#value DataDatabricksSqlWarehouse#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#key DataDatabricksSqlWarehouse#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/sql_warehouse#value DataDatabricksSqlWarehouse#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSqlWarehouseChannelOutputReference <a name="DataDatabricksSqlWarehouseChannelOutputReference" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouseChannelOutputReference;

new DataDatabricksSqlWarehouseChannelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resetDbsqlVersion">resetDbsqlVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDbsqlVersion` <a name="resetDbsqlVersion" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resetDbsqlVersion"></a>

```java
public void resetDbsqlVersion()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.dbsqlVersionInput">dbsqlVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.dbsqlVersion">dbsqlVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbsqlVersionInput`<sup>Optional</sup> <a name="dbsqlVersionInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.dbsqlVersionInput"></a>

```java
public java.lang.String getDbsqlVersionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `dbsqlVersion`<sup>Required</sup> <a name="dbsqlVersion" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.dbsqlVersion"></a>

```java
public java.lang.String getDbsqlVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.internalValue"></a>

```java
public DataDatabricksSqlWarehouseChannel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a>

---


### DataDatabricksSqlWarehouseHealthFailureReasonOutputReference <a name="DataDatabricksSqlWarehouseHealthFailureReasonOutputReference" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference;

new DataDatabricksSqlWarehouseHealthFailureReasonOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resetCode"></a>

```java
public void resetCode()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.codeInput">codeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.codeInput"></a>

```java
public java.lang.String getCodeInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.internalValue"></a>

```java
public DataDatabricksSqlWarehouseHealthFailureReason getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a>

---


### DataDatabricksSqlWarehouseHealthOutputReference <a name="DataDatabricksSqlWarehouseHealthOutputReference" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouseHealthOutputReference;

new DataDatabricksSqlWarehouseHealthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.putFailureReason">putFailureReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetDetails">resetDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetFailureReason">resetFailureReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetSummary">resetSummary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFailureReason` <a name="putFailureReason" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.putFailureReason"></a>

```java
public void putFailureReason(DataDatabricksSqlWarehouseHealthFailureReason value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.putFailureReason.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a>

---

##### `resetDetails` <a name="resetDetails" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetDetails"></a>

```java
public void resetDetails()
```

##### `resetFailureReason` <a name="resetFailureReason" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetFailureReason"></a>

```java
public void resetFailureReason()
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetSummary` <a name="resetSummary" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetSummary"></a>

```java
public void resetSummary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.failureReason">failureReason</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference">DataDatabricksSqlWarehouseHealthFailureReasonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.detailsInput">detailsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.failureReasonInput">failureReasonInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.summaryInput">summaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.details">details</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.failureReason"></a>

```java
public DataDatabricksSqlWarehouseHealthFailureReasonOutputReference getFailureReason();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference">DataDatabricksSqlWarehouseHealthFailureReasonOutputReference</a>

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.detailsInput"></a>

```java
public java.lang.String getDetailsInput();
```

- *Type:* java.lang.String

---

##### `failureReasonInput`<sup>Optional</sup> <a name="failureReasonInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.failureReasonInput"></a>

```java
public DataDatabricksSqlWarehouseHealthFailureReason getFailureReasonInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a>

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.summaryInput"></a>

```java
public java.lang.String getSummaryInput();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.details"></a>

```java
public java.lang.String getDetails();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.internalValue"></a>

```java
public DataDatabricksSqlWarehouseHealth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a>

---


### DataDatabricksSqlWarehouseOdbcParamsOutputReference <a name="DataDatabricksSqlWarehouseOdbcParamsOutputReference" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference;

new DataDatabricksSqlWarehouseOdbcParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.internalValue"></a>

```java
public DataDatabricksSqlWarehouseOdbcParams getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a>

---


### DataDatabricksSqlWarehouseTagsCustomTagsList <a name="DataDatabricksSqlWarehouseTagsCustomTagsList" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouseTagsCustomTagsList;

new DataDatabricksSqlWarehouseTagsCustomTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.get"></a>

```java
public DataDatabricksSqlWarehouseTagsCustomTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a>>

---


### DataDatabricksSqlWarehouseTagsCustomTagsOutputReference <a name="DataDatabricksSqlWarehouseTagsCustomTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference;

new DataDatabricksSqlWarehouseTagsCustomTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a>

---


### DataDatabricksSqlWarehouseTagsOutputReference <a name="DataDatabricksSqlWarehouseTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_sql_warehouse.DataDatabricksSqlWarehouseTagsOutputReference;

new DataDatabricksSqlWarehouseTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.putCustomTags">putCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.resetCustomTags">resetCustomTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomTags` <a name="putCustomTags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.putCustomTags"></a>

```java
public void putCustomTags(IResolvable OR java.util.List<DataDatabricksSqlWarehouseTagsCustomTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.putCustomTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a>>

---

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.resetCustomTags"></a>

```java
public void resetCustomTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.customTags">customTags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList">DataDatabricksSqlWarehouseTagsCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.customTagsInput">customTagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.customTags"></a>

```java
public DataDatabricksSqlWarehouseTagsCustomTagsList getCustomTags();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList">DataDatabricksSqlWarehouseTagsCustomTagsList</a>

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.customTagsInput"></a>

```java
public java.lang.Object getCustomTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags">DataDatabricksSqlWarehouseTagsCustomTags</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.internalValue"></a>

```java
public DataDatabricksSqlWarehouseTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a>

---



