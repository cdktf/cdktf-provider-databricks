# `databricks_sql_endpoint`

Refer to the Terraform Registory for docs: [`databricks_sql_endpoint`](https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint).

# `sqlEndpoint` Submodule <a name="`sqlEndpoint` Submodule" id="@cdktf/provider-databricks.sqlEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlEndpoint <a name="SqlEndpoint" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint databricks_sql_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_endpoint.SqlEndpoint;

SqlEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .clusterSize(java.lang.String)
    .name(java.lang.String)
//  .autoStopMins(java.lang.Number)
//  .channel(SqlEndpointChannel)
//  .dataSourceId(java.lang.String)
//  .enablePhoton(java.lang.Boolean)
//  .enablePhoton(IResolvable)
//  .enableServerlessCompute(java.lang.Boolean)
//  .enableServerlessCompute(IResolvable)
//  .id(java.lang.String)
//  .instanceProfileArn(java.lang.String)
//  .jdbcUrl(java.lang.String)
//  .maxNumClusters(java.lang.Number)
//  .minNumClusters(java.lang.Number)
//  .numClusters(java.lang.Number)
//  .odbcParams(SqlEndpointOdbcParams)
//  .spotInstancePolicy(java.lang.String)
//  .state(java.lang.String)
//  .tags(SqlEndpointTags)
//  .timeouts(SqlEndpointTimeouts)
//  .warehouseType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.clusterSize">clusterSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#cluster_size SqlEndpoint#cluster_size}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#name SqlEndpoint#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.autoStopMins">autoStopMins</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#auto_stop_mins SqlEndpoint#auto_stop_mins}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.channel">channel</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a></code> | channel block. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#data_source_id SqlEndpoint#data_source_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.enablePhoton">enablePhoton</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#enable_photon SqlEndpoint#enable_photon}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.enableServerlessCompute">enableServerlessCompute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#enable_serverless_compute SqlEndpoint#enable_serverless_compute}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#id SqlEndpoint#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#instance_profile_arn SqlEndpoint#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.jdbcUrl">jdbcUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#jdbc_url SqlEndpoint#jdbc_url}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.maxNumClusters">maxNumClusters</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#max_num_clusters SqlEndpoint#max_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.minNumClusters">minNumClusters</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#min_num_clusters SqlEndpoint#min_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.numClusters">numClusters</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#num_clusters SqlEndpoint#num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.odbcParams">odbcParams</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams">SqlEndpointOdbcParams</a></code> | odbc_params block. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.spotInstancePolicy">spotInstancePolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#spot_instance_policy SqlEndpoint#spot_instance_policy}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#state SqlEndpoint#state}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a></code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.warehouseType">warehouseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#warehouse_type SqlEndpoint#warehouse_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterSize`<sup>Required</sup> <a name="clusterSize" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.clusterSize"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#cluster_size SqlEndpoint#cluster_size}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#name SqlEndpoint#name}.

---

##### `autoStopMins`<sup>Optional</sup> <a name="autoStopMins" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.autoStopMins"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#auto_stop_mins SqlEndpoint#auto_stop_mins}.

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.channel"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a>

channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#channel SqlEndpoint#channel}

---

##### `dataSourceId`<sup>Optional</sup> <a name="dataSourceId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.dataSourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#data_source_id SqlEndpoint#data_source_id}.

---

##### `enablePhoton`<sup>Optional</sup> <a name="enablePhoton" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.enablePhoton"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#enable_photon SqlEndpoint#enable_photon}.

---

##### `enableServerlessCompute`<sup>Optional</sup> <a name="enableServerlessCompute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.enableServerlessCompute"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#enable_serverless_compute SqlEndpoint#enable_serverless_compute}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#id SqlEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.instanceProfileArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#instance_profile_arn SqlEndpoint#instance_profile_arn}.

---

##### `jdbcUrl`<sup>Optional</sup> <a name="jdbcUrl" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.jdbcUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#jdbc_url SqlEndpoint#jdbc_url}.

---

##### `maxNumClusters`<sup>Optional</sup> <a name="maxNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.maxNumClusters"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#max_num_clusters SqlEndpoint#max_num_clusters}.

---

##### `minNumClusters`<sup>Optional</sup> <a name="minNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.minNumClusters"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#min_num_clusters SqlEndpoint#min_num_clusters}.

---

##### `numClusters`<sup>Optional</sup> <a name="numClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.numClusters"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#num_clusters SqlEndpoint#num_clusters}.

---

##### `odbcParams`<sup>Optional</sup> <a name="odbcParams" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.odbcParams"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams">SqlEndpointOdbcParams</a>

odbc_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#odbc_params SqlEndpoint#odbc_params}

---

##### `spotInstancePolicy`<sup>Optional</sup> <a name="spotInstancePolicy" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.spotInstancePolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#spot_instance_policy SqlEndpoint#spot_instance_policy}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#state SqlEndpoint#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.tags"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#tags SqlEndpoint#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#timeouts SqlEndpoint#timeouts}

---

##### `warehouseType`<sup>Optional</sup> <a name="warehouseType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.warehouseType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#warehouse_type SqlEndpoint#warehouse_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putChannel">putChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putOdbcParams">putOdbcParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetAutoStopMins">resetAutoStopMins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetDataSourceId">resetDataSourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetEnablePhoton">resetEnablePhoton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetEnableServerlessCompute">resetEnableServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetJdbcUrl">resetJdbcUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetMaxNumClusters">resetMaxNumClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetMinNumClusters">resetMinNumClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetNumClusters">resetNumClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetOdbcParams">resetOdbcParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetSpotInstancePolicy">resetSpotInstancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetWarehouseType">resetWarehouseType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putChannel` <a name="putChannel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putChannel"></a>

```java
public void putChannel(SqlEndpointChannel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putChannel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a>

---

##### `putOdbcParams` <a name="putOdbcParams" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putOdbcParams"></a>

```java
public void putOdbcParams(SqlEndpointOdbcParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putOdbcParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams">SqlEndpointOdbcParams</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTags"></a>

```java
public void putTags(SqlEndpointTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTimeouts"></a>

```java
public void putTimeouts(SqlEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a>

---

##### `resetAutoStopMins` <a name="resetAutoStopMins" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetAutoStopMins"></a>

```java
public void resetAutoStopMins()
```

##### `resetChannel` <a name="resetChannel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetChannel"></a>

```java
public void resetChannel()
```

##### `resetDataSourceId` <a name="resetDataSourceId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetDataSourceId"></a>

```java
public void resetDataSourceId()
```

##### `resetEnablePhoton` <a name="resetEnablePhoton" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetEnablePhoton"></a>

```java
public void resetEnablePhoton()
```

##### `resetEnableServerlessCompute` <a name="resetEnableServerlessCompute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetEnableServerlessCompute"></a>

```java
public void resetEnableServerlessCompute()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetInstanceProfileArn"></a>

```java
public void resetInstanceProfileArn()
```

##### `resetJdbcUrl` <a name="resetJdbcUrl" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetJdbcUrl"></a>

```java
public void resetJdbcUrl()
```

##### `resetMaxNumClusters` <a name="resetMaxNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetMaxNumClusters"></a>

```java
public void resetMaxNumClusters()
```

##### `resetMinNumClusters` <a name="resetMinNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetMinNumClusters"></a>

```java
public void resetMinNumClusters()
```

##### `resetNumClusters` <a name="resetNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetNumClusters"></a>

```java
public void resetNumClusters()
```

##### `resetOdbcParams` <a name="resetOdbcParams" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetOdbcParams"></a>

```java
public void resetOdbcParams()
```

##### `resetSpotInstancePolicy` <a name="resetSpotInstancePolicy" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetSpotInstancePolicy"></a>

```java
public void resetSpotInstancePolicy()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetState"></a>

```java
public void resetState()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWarehouseType` <a name="resetWarehouseType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetWarehouseType"></a>

```java
public void resetWarehouseType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_endpoint.SqlEndpoint;

SqlEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_endpoint.SqlEndpoint;

SqlEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_endpoint.SqlEndpoint;

SqlEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.channel">channel</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference">SqlEndpointChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.odbcParams">odbcParams</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference">SqlEndpointOdbcParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference">SqlEndpointTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference">SqlEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.autoStopMinsInput">autoStopMinsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.channelInput">channelInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.clusterSizeInput">clusterSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enablePhotonInput">enablePhotonInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enableServerlessComputeInput">enableServerlessComputeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.jdbcUrlInput">jdbcUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.maxNumClustersInput">maxNumClustersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.minNumClustersInput">minNumClustersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.numClustersInput">numClustersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.odbcParamsInput">odbcParamsInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams">SqlEndpointOdbcParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.spotInstancePolicyInput">spotInstancePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.warehouseTypeInput">warehouseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.autoStopMins">autoStopMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.clusterSize">clusterSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enablePhoton">enablePhoton</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enableServerlessCompute">enableServerlessCompute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.jdbcUrl">jdbcUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.maxNumClusters">maxNumClusters</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.minNumClusters">minNumClusters</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.numClusters">numClusters</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.spotInstancePolicy">spotInstancePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.warehouseType">warehouseType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.channel"></a>

```java
public SqlEndpointChannelOutputReference getChannel();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference">SqlEndpointChannelOutputReference</a>

---

##### `odbcParams`<sup>Required</sup> <a name="odbcParams" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.odbcParams"></a>

```java
public SqlEndpointOdbcParamsOutputReference getOdbcParams();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference">SqlEndpointOdbcParamsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tags"></a>

```java
public SqlEndpointTagsOutputReference getTags();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference">SqlEndpointTagsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.timeouts"></a>

```java
public SqlEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference">SqlEndpointTimeoutsOutputReference</a>

---

##### `autoStopMinsInput`<sup>Optional</sup> <a name="autoStopMinsInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.autoStopMinsInput"></a>

```java
public java.lang.Number getAutoStopMinsInput();
```

- *Type:* java.lang.Number

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.channelInput"></a>

```java
public SqlEndpointChannel getChannelInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a>

---

##### `clusterSizeInput`<sup>Optional</sup> <a name="clusterSizeInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.clusterSizeInput"></a>

```java
public java.lang.String getClusterSizeInput();
```

- *Type:* java.lang.String

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dataSourceIdInput"></a>

```java
public java.lang.String getDataSourceIdInput();
```

- *Type:* java.lang.String

---

##### `enablePhotonInput`<sup>Optional</sup> <a name="enablePhotonInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enablePhotonInput"></a>

```java
public java.lang.Object getEnablePhotonInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableServerlessComputeInput`<sup>Optional</sup> <a name="enableServerlessComputeInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enableServerlessComputeInput"></a>

```java
public java.lang.Object getEnableServerlessComputeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.instanceProfileArnInput"></a>

```java
public java.lang.String getInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `jdbcUrlInput`<sup>Optional</sup> <a name="jdbcUrlInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.jdbcUrlInput"></a>

```java
public java.lang.String getJdbcUrlInput();
```

- *Type:* java.lang.String

---

##### `maxNumClustersInput`<sup>Optional</sup> <a name="maxNumClustersInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.maxNumClustersInput"></a>

```java
public java.lang.Number getMaxNumClustersInput();
```

- *Type:* java.lang.Number

---

##### `minNumClustersInput`<sup>Optional</sup> <a name="minNumClustersInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.minNumClustersInput"></a>

```java
public java.lang.Number getMinNumClustersInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `numClustersInput`<sup>Optional</sup> <a name="numClustersInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.numClustersInput"></a>

```java
public java.lang.Number getNumClustersInput();
```

- *Type:* java.lang.Number

---

##### `odbcParamsInput`<sup>Optional</sup> <a name="odbcParamsInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.odbcParamsInput"></a>

```java
public SqlEndpointOdbcParams getOdbcParamsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams">SqlEndpointOdbcParams</a>

---

##### `spotInstancePolicyInput`<sup>Optional</sup> <a name="spotInstancePolicyInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.spotInstancePolicyInput"></a>

```java
public java.lang.String getSpotInstancePolicyInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tagsInput"></a>

```java
public SqlEndpointTags getTagsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a>

---

##### `warehouseTypeInput`<sup>Optional</sup> <a name="warehouseTypeInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.warehouseTypeInput"></a>

```java
public java.lang.String getWarehouseTypeInput();
```

- *Type:* java.lang.String

---

##### `autoStopMins`<sup>Required</sup> <a name="autoStopMins" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.autoStopMins"></a>

```java
public java.lang.Number getAutoStopMins();
```

- *Type:* java.lang.Number

---

##### `clusterSize`<sup>Required</sup> <a name="clusterSize" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.clusterSize"></a>

```java
public java.lang.String getClusterSize();
```

- *Type:* java.lang.String

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `enablePhoton`<sup>Required</sup> <a name="enablePhoton" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enablePhoton"></a>

```java
public java.lang.Object getEnablePhoton();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableServerlessCompute`<sup>Required</sup> <a name="enableServerlessCompute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enableServerlessCompute"></a>

```java
public java.lang.Object getEnableServerlessCompute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `jdbcUrl`<sup>Required</sup> <a name="jdbcUrl" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.jdbcUrl"></a>

```java
public java.lang.String getJdbcUrl();
```

- *Type:* java.lang.String

---

##### `maxNumClusters`<sup>Required</sup> <a name="maxNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.maxNumClusters"></a>

```java
public java.lang.Number getMaxNumClusters();
```

- *Type:* java.lang.Number

---

##### `minNumClusters`<sup>Required</sup> <a name="minNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.minNumClusters"></a>

```java
public java.lang.Number getMinNumClusters();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `numClusters`<sup>Required</sup> <a name="numClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.numClusters"></a>

```java
public java.lang.Number getNumClusters();
```

- *Type:* java.lang.Number

---

##### `spotInstancePolicy`<sup>Required</sup> <a name="spotInstancePolicy" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.spotInstancePolicy"></a>

```java
public java.lang.String getSpotInstancePolicy();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `warehouseType`<sup>Required</sup> <a name="warehouseType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.warehouseType"></a>

```java
public java.lang.String getWarehouseType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SqlEndpointChannel <a name="SqlEndpointChannel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_endpoint.SqlEndpointChannel;

SqlEndpointChannel.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#name SqlEndpoint#name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#name SqlEndpoint#name}.

---

### SqlEndpointConfig <a name="SqlEndpointConfig" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_endpoint.SqlEndpointConfig;

SqlEndpointConfig.builder()
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
    .clusterSize(java.lang.String)
    .name(java.lang.String)
//  .autoStopMins(java.lang.Number)
//  .channel(SqlEndpointChannel)
//  .dataSourceId(java.lang.String)
//  .enablePhoton(java.lang.Boolean)
//  .enablePhoton(IResolvable)
//  .enableServerlessCompute(java.lang.Boolean)
//  .enableServerlessCompute(IResolvable)
//  .id(java.lang.String)
//  .instanceProfileArn(java.lang.String)
//  .jdbcUrl(java.lang.String)
//  .maxNumClusters(java.lang.Number)
//  .minNumClusters(java.lang.Number)
//  .numClusters(java.lang.Number)
//  .odbcParams(SqlEndpointOdbcParams)
//  .spotInstancePolicy(java.lang.String)
//  .state(java.lang.String)
//  .tags(SqlEndpointTags)
//  .timeouts(SqlEndpointTimeouts)
//  .warehouseType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.clusterSize">clusterSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#cluster_size SqlEndpoint#cluster_size}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#name SqlEndpoint#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.autoStopMins">autoStopMins</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#auto_stop_mins SqlEndpoint#auto_stop_mins}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.channel">channel</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a></code> | channel block. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#data_source_id SqlEndpoint#data_source_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.enablePhoton">enablePhoton</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#enable_photon SqlEndpoint#enable_photon}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.enableServerlessCompute">enableServerlessCompute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#enable_serverless_compute SqlEndpoint#enable_serverless_compute}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#id SqlEndpoint#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#instance_profile_arn SqlEndpoint#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.jdbcUrl">jdbcUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#jdbc_url SqlEndpoint#jdbc_url}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.maxNumClusters">maxNumClusters</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#max_num_clusters SqlEndpoint#max_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.minNumClusters">minNumClusters</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#min_num_clusters SqlEndpoint#min_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.numClusters">numClusters</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#num_clusters SqlEndpoint#num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.odbcParams">odbcParams</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams">SqlEndpointOdbcParams</a></code> | odbc_params block. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.spotInstancePolicy">spotInstancePolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#spot_instance_policy SqlEndpoint#spot_instance_policy}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#state SqlEndpoint#state}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a></code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.warehouseType">warehouseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#warehouse_type SqlEndpoint#warehouse_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterSize`<sup>Required</sup> <a name="clusterSize" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.clusterSize"></a>

```java
public java.lang.String getClusterSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#cluster_size SqlEndpoint#cluster_size}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#name SqlEndpoint#name}.

---

##### `autoStopMins`<sup>Optional</sup> <a name="autoStopMins" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.autoStopMins"></a>

```java
public java.lang.Number getAutoStopMins();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#auto_stop_mins SqlEndpoint#auto_stop_mins}.

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.channel"></a>

```java
public SqlEndpointChannel getChannel();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a>

channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#channel SqlEndpoint#channel}

---

##### `dataSourceId`<sup>Optional</sup> <a name="dataSourceId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#data_source_id SqlEndpoint#data_source_id}.

---

##### `enablePhoton`<sup>Optional</sup> <a name="enablePhoton" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.enablePhoton"></a>

```java
public java.lang.Object getEnablePhoton();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#enable_photon SqlEndpoint#enable_photon}.

---

##### `enableServerlessCompute`<sup>Optional</sup> <a name="enableServerlessCompute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.enableServerlessCompute"></a>

```java
public java.lang.Object getEnableServerlessCompute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#enable_serverless_compute SqlEndpoint#enable_serverless_compute}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#id SqlEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#instance_profile_arn SqlEndpoint#instance_profile_arn}.

---

##### `jdbcUrl`<sup>Optional</sup> <a name="jdbcUrl" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.jdbcUrl"></a>

```java
public java.lang.String getJdbcUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#jdbc_url SqlEndpoint#jdbc_url}.

---

##### `maxNumClusters`<sup>Optional</sup> <a name="maxNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.maxNumClusters"></a>

```java
public java.lang.Number getMaxNumClusters();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#max_num_clusters SqlEndpoint#max_num_clusters}.

---

##### `minNumClusters`<sup>Optional</sup> <a name="minNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.minNumClusters"></a>

```java
public java.lang.Number getMinNumClusters();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#min_num_clusters SqlEndpoint#min_num_clusters}.

---

##### `numClusters`<sup>Optional</sup> <a name="numClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.numClusters"></a>

```java
public java.lang.Number getNumClusters();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#num_clusters SqlEndpoint#num_clusters}.

---

##### `odbcParams`<sup>Optional</sup> <a name="odbcParams" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.odbcParams"></a>

```java
public SqlEndpointOdbcParams getOdbcParams();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams">SqlEndpointOdbcParams</a>

odbc_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#odbc_params SqlEndpoint#odbc_params}

---

##### `spotInstancePolicy`<sup>Optional</sup> <a name="spotInstancePolicy" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.spotInstancePolicy"></a>

```java
public java.lang.String getSpotInstancePolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#spot_instance_policy SqlEndpoint#spot_instance_policy}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#state SqlEndpoint#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.tags"></a>

```java
public SqlEndpointTags getTags();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#tags SqlEndpoint#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.timeouts"></a>

```java
public SqlEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#timeouts SqlEndpoint#timeouts}

---

##### `warehouseType`<sup>Optional</sup> <a name="warehouseType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.warehouseType"></a>

```java
public java.lang.String getWarehouseType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#warehouse_type SqlEndpoint#warehouse_type}.

---

### SqlEndpointOdbcParams <a name="SqlEndpointOdbcParams" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_endpoint.SqlEndpointOdbcParams;

SqlEndpointOdbcParams.builder()
    .path(java.lang.String)
    .port(java.lang.Number)
    .protocol(java.lang.String)
//  .host(java.lang.String)
//  .hostname(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#path SqlEndpoint#path}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#port SqlEndpoint#port}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#protocol SqlEndpoint#protocol}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#host SqlEndpoint#host}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#hostname SqlEndpoint#hostname}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#path SqlEndpoint#path}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#port SqlEndpoint#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#protocol SqlEndpoint#protocol}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#host SqlEndpoint#host}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#hostname SqlEndpoint#hostname}.

---

### SqlEndpointTags <a name="SqlEndpointTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_endpoint.SqlEndpointTags;

SqlEndpointTags.builder()
    .customTags(IResolvable)
    .customTags(java.util.List<SqlEndpointTagsCustomTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags.property.customTags">customTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags">SqlEndpointTagsCustomTags</a>></code> | custom_tags block. |

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags.property.customTags"></a>

```java
public java.lang.Object getCustomTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags">SqlEndpointTagsCustomTags</a>>

custom_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#custom_tags SqlEndpoint#custom_tags}

---

### SqlEndpointTagsCustomTags <a name="SqlEndpointTagsCustomTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_endpoint.SqlEndpointTagsCustomTags;

SqlEndpointTagsCustomTags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#key SqlEndpoint#key}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#value SqlEndpoint#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#key SqlEndpoint#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#value SqlEndpoint#value}.

---

### SqlEndpointTimeouts <a name="SqlEndpointTimeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_endpoint.SqlEndpointTimeouts;

SqlEndpointTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#create SqlEndpoint#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/sql_endpoint#create SqlEndpoint#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlEndpointChannelOutputReference <a name="SqlEndpointChannelOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_endpoint.SqlEndpointChannelOutputReference;

new SqlEndpointChannelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.internalValue"></a>

```java
public SqlEndpointChannel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a>

---


### SqlEndpointOdbcParamsOutputReference <a name="SqlEndpointOdbcParamsOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_endpoint.SqlEndpointOdbcParamsOutputReference;

new SqlEndpointOdbcParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.resetHostname">resetHostname</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.resetHostname"></a>

```java
public void resetHostname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams">SqlEndpointOdbcParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.internalValue"></a>

```java
public SqlEndpointOdbcParams getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams">SqlEndpointOdbcParams</a>

---


### SqlEndpointTagsCustomTagsList <a name="SqlEndpointTagsCustomTagsList" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_endpoint.SqlEndpointTagsCustomTagsList;

new SqlEndpointTagsCustomTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.get"></a>

```java
public SqlEndpointTagsCustomTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags">SqlEndpointTagsCustomTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags">SqlEndpointTagsCustomTags</a>>

---


### SqlEndpointTagsCustomTagsOutputReference <a name="SqlEndpointTagsCustomTagsOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_endpoint.SqlEndpointTagsCustomTagsOutputReference;

new SqlEndpointTagsCustomTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags">SqlEndpointTagsCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags">SqlEndpointTagsCustomTags</a>

---


### SqlEndpointTagsOutputReference <a name="SqlEndpointTagsOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_endpoint.SqlEndpointTagsOutputReference;

new SqlEndpointTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.putCustomTags">putCustomTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomTags` <a name="putCustomTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.putCustomTags"></a>

```java
public void putCustomTags(IResolvable OR java.util.List<SqlEndpointTagsCustomTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.putCustomTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags">SqlEndpointTagsCustomTags</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.customTags">customTags</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList">SqlEndpointTagsCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.customTagsInput">customTagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags">SqlEndpointTagsCustomTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.customTags"></a>

```java
public SqlEndpointTagsCustomTagsList getCustomTags();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList">SqlEndpointTagsCustomTagsList</a>

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.customTagsInput"></a>

```java
public java.lang.Object getCustomTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags">SqlEndpointTagsCustomTags</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.internalValue"></a>

```java
public SqlEndpointTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a>

---


### SqlEndpointTimeoutsOutputReference <a name="SqlEndpointTimeoutsOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_endpoint.SqlEndpointTimeoutsOutputReference;

new SqlEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a>

---



