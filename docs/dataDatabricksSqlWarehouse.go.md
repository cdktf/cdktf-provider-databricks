# `dataDatabricksSqlWarehouse` Submodule <a name="`dataDatabricksSqlWarehouse` Submodule" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSqlWarehouse <a name="DataDatabricksSqlWarehouse" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse databricks_sql_warehouse}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

datadatabrickssqlwarehouse.NewDataDatabricksSqlWarehouse(scope Construct, id *string, config DataDatabricksSqlWarehouseConfig) DataDatabricksSqlWarehouse
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig">DataDatabricksSqlWarehouseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig">DataDatabricksSqlWarehouseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putChannel">PutChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putHealth">PutHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putOdbcParams">PutOdbcParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetAutoStopMins">ResetAutoStopMins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetClusterSize">ResetClusterSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetCreatorName">ResetCreatorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetDataSourceId">ResetDataSourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetEnablePhoton">ResetEnablePhoton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetEnableServerlessCompute">ResetEnableServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetHealth">ResetHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetInstanceProfileArn">ResetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetJdbcUrl">ResetJdbcUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetMaxNumClusters">ResetMaxNumClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetMinNumClusters">ResetMinNumClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetNumActiveSessions">ResetNumActiveSessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetNumClusters">ResetNumClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetOdbcParams">ResetOdbcParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetSpotInstancePolicy">ResetSpotInstancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetWarehouseType">ResetWarehouseType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutChannel` <a name="PutChannel" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putChannel"></a>

```go
func PutChannel(value DataDatabricksSqlWarehouseChannel)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putChannel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a>

---

##### `PutHealth` <a name="PutHealth" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putHealth"></a>

```go
func PutHealth(value DataDatabricksSqlWarehouseHealth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a>

---

##### `PutOdbcParams` <a name="PutOdbcParams" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putOdbcParams"></a>

```go
func PutOdbcParams(value DataDatabricksSqlWarehouseOdbcParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putOdbcParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a>

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putTags"></a>

```go
func PutTags(value DataDatabricksSqlWarehouseTags)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a>

---

##### `ResetAutoStopMins` <a name="ResetAutoStopMins" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetAutoStopMins"></a>

```go
func ResetAutoStopMins()
```

##### `ResetChannel` <a name="ResetChannel" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetChannel"></a>

```go
func ResetChannel()
```

##### `ResetClusterSize` <a name="ResetClusterSize" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetClusterSize"></a>

```go
func ResetClusterSize()
```

##### `ResetCreatorName` <a name="ResetCreatorName" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetCreatorName"></a>

```go
func ResetCreatorName()
```

##### `ResetDataSourceId` <a name="ResetDataSourceId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetDataSourceId"></a>

```go
func ResetDataSourceId()
```

##### `ResetEnablePhoton` <a name="ResetEnablePhoton" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetEnablePhoton"></a>

```go
func ResetEnablePhoton()
```

##### `ResetEnableServerlessCompute` <a name="ResetEnableServerlessCompute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetEnableServerlessCompute"></a>

```go
func ResetEnableServerlessCompute()
```

##### `ResetHealth` <a name="ResetHealth" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetHealth"></a>

```go
func ResetHealth()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceProfileArn` <a name="ResetInstanceProfileArn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetInstanceProfileArn"></a>

```go
func ResetInstanceProfileArn()
```

##### `ResetJdbcUrl` <a name="ResetJdbcUrl" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetJdbcUrl"></a>

```go
func ResetJdbcUrl()
```

##### `ResetMaxNumClusters` <a name="ResetMaxNumClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetMaxNumClusters"></a>

```go
func ResetMaxNumClusters()
```

##### `ResetMinNumClusters` <a name="ResetMinNumClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetMinNumClusters"></a>

```go
func ResetMinNumClusters()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetName"></a>

```go
func ResetName()
```

##### `ResetNumActiveSessions` <a name="ResetNumActiveSessions" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetNumActiveSessions"></a>

```go
func ResetNumActiveSessions()
```

##### `ResetNumClusters` <a name="ResetNumClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetNumClusters"></a>

```go
func ResetNumClusters()
```

##### `ResetOdbcParams` <a name="ResetOdbcParams" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetOdbcParams"></a>

```go
func ResetOdbcParams()
```

##### `ResetSpotInstancePolicy` <a name="ResetSpotInstancePolicy" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetSpotInstancePolicy"></a>

```go
func ResetSpotInstancePolicy()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetState"></a>

```go
func ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetTags"></a>

```go
func ResetTags()
```

##### `ResetWarehouseType` <a name="ResetWarehouseType" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.resetWarehouseType"></a>

```go
func ResetWarehouseType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksSqlWarehouse resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

datadatabrickssqlwarehouse.DataDatabricksSqlWarehouse_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

datadatabrickssqlwarehouse.DataDatabricksSqlWarehouse_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

datadatabrickssqlwarehouse.DataDatabricksSqlWarehouse_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

datadatabrickssqlwarehouse.DataDatabricksSqlWarehouse_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksSqlWarehouse resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksSqlWarehouse to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksSqlWarehouse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksSqlWarehouse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.channel">Channel</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference">DataDatabricksSqlWarehouseChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.health">Health</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference">DataDatabricksSqlWarehouseHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.odbcParams">OdbcParams</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference">DataDatabricksSqlWarehouseOdbcParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference">DataDatabricksSqlWarehouseTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.autoStopMinsInput">AutoStopMinsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.channelInput">ChannelInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.clusterSizeInput">ClusterSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.creatorNameInput">CreatorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.dataSourceIdInput">DataSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enablePhotonInput">EnablePhotonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enableServerlessComputeInput">EnableServerlessComputeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.healthInput">HealthInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.jdbcUrlInput">JdbcUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.maxNumClustersInput">MaxNumClustersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.minNumClustersInput">MinNumClustersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numActiveSessionsInput">NumActiveSessionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numClustersInput">NumClustersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.odbcParamsInput">OdbcParamsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.spotInstancePolicyInput">SpotInstancePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.tagsInput">TagsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.warehouseTypeInput">WarehouseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.autoStopMins">AutoStopMins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.clusterSize">ClusterSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.creatorName">CreatorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enablePhoton">EnablePhoton</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enableServerlessCompute">EnableServerlessCompute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.jdbcUrl">JdbcUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.maxNumClusters">MaxNumClusters</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.minNumClusters">MinNumClusters</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numActiveSessions">NumActiveSessions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numClusters">NumClusters</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.spotInstancePolicy">SpotInstancePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.warehouseType">WarehouseType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.channel"></a>

```go
func Channel() DataDatabricksSqlWarehouseChannelOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference">DataDatabricksSqlWarehouseChannelOutputReference</a>

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.health"></a>

```go
func Health() DataDatabricksSqlWarehouseHealthOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference">DataDatabricksSqlWarehouseHealthOutputReference</a>

---

##### `OdbcParams`<sup>Required</sup> <a name="OdbcParams" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.odbcParams"></a>

```go
func OdbcParams() DataDatabricksSqlWarehouseOdbcParamsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference">DataDatabricksSqlWarehouseOdbcParamsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.tags"></a>

```go
func Tags() DataDatabricksSqlWarehouseTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference">DataDatabricksSqlWarehouseTagsOutputReference</a>

---

##### `AutoStopMinsInput`<sup>Optional</sup> <a name="AutoStopMinsInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.autoStopMinsInput"></a>

```go
func AutoStopMinsInput() *f64
```

- *Type:* *f64

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.channelInput"></a>

```go
func ChannelInput() DataDatabricksSqlWarehouseChannel
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a>

---

##### `ClusterSizeInput`<sup>Optional</sup> <a name="ClusterSizeInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.clusterSizeInput"></a>

```go
func ClusterSizeInput() *string
```

- *Type:* *string

---

##### `CreatorNameInput`<sup>Optional</sup> <a name="CreatorNameInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.creatorNameInput"></a>

```go
func CreatorNameInput() *string
```

- *Type:* *string

---

##### `DataSourceIdInput`<sup>Optional</sup> <a name="DataSourceIdInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.dataSourceIdInput"></a>

```go
func DataSourceIdInput() *string
```

- *Type:* *string

---

##### `EnablePhotonInput`<sup>Optional</sup> <a name="EnablePhotonInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enablePhotonInput"></a>

```go
func EnablePhotonInput() interface{}
```

- *Type:* interface{}

---

##### `EnableServerlessComputeInput`<sup>Optional</sup> <a name="EnableServerlessComputeInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enableServerlessComputeInput"></a>

```go
func EnableServerlessComputeInput() interface{}
```

- *Type:* interface{}

---

##### `HealthInput`<sup>Optional</sup> <a name="HealthInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.healthInput"></a>

```go
func HealthInput() DataDatabricksSqlWarehouseHealth
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.instanceProfileArnInput"></a>

```go
func InstanceProfileArnInput() *string
```

- *Type:* *string

---

##### `JdbcUrlInput`<sup>Optional</sup> <a name="JdbcUrlInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.jdbcUrlInput"></a>

```go
func JdbcUrlInput() *string
```

- *Type:* *string

---

##### `MaxNumClustersInput`<sup>Optional</sup> <a name="MaxNumClustersInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.maxNumClustersInput"></a>

```go
func MaxNumClustersInput() *f64
```

- *Type:* *f64

---

##### `MinNumClustersInput`<sup>Optional</sup> <a name="MinNumClustersInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.minNumClustersInput"></a>

```go
func MinNumClustersInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NumActiveSessionsInput`<sup>Optional</sup> <a name="NumActiveSessionsInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numActiveSessionsInput"></a>

```go
func NumActiveSessionsInput() *f64
```

- *Type:* *f64

---

##### `NumClustersInput`<sup>Optional</sup> <a name="NumClustersInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numClustersInput"></a>

```go
func NumClustersInput() *f64
```

- *Type:* *f64

---

##### `OdbcParamsInput`<sup>Optional</sup> <a name="OdbcParamsInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.odbcParamsInput"></a>

```go
func OdbcParamsInput() DataDatabricksSqlWarehouseOdbcParams
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a>

---

##### `SpotInstancePolicyInput`<sup>Optional</sup> <a name="SpotInstancePolicyInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.spotInstancePolicyInput"></a>

```go
func SpotInstancePolicyInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.tagsInput"></a>

```go
func TagsInput() DataDatabricksSqlWarehouseTags
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a>

---

##### `WarehouseTypeInput`<sup>Optional</sup> <a name="WarehouseTypeInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.warehouseTypeInput"></a>

```go
func WarehouseTypeInput() *string
```

- *Type:* *string

---

##### `AutoStopMins`<sup>Required</sup> <a name="AutoStopMins" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.autoStopMins"></a>

```go
func AutoStopMins() *f64
```

- *Type:* *f64

---

##### `ClusterSize`<sup>Required</sup> <a name="ClusterSize" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.clusterSize"></a>

```go
func ClusterSize() *string
```

- *Type:* *string

---

##### `CreatorName`<sup>Required</sup> <a name="CreatorName" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.creatorName"></a>

```go
func CreatorName() *string
```

- *Type:* *string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `EnablePhoton`<sup>Required</sup> <a name="EnablePhoton" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enablePhoton"></a>

```go
func EnablePhoton() interface{}
```

- *Type:* interface{}

---

##### `EnableServerlessCompute`<sup>Required</sup> <a name="EnableServerlessCompute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.enableServerlessCompute"></a>

```go
func EnableServerlessCompute() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.instanceProfileArn"></a>

```go
func InstanceProfileArn() *string
```

- *Type:* *string

---

##### `JdbcUrl`<sup>Required</sup> <a name="JdbcUrl" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.jdbcUrl"></a>

```go
func JdbcUrl() *string
```

- *Type:* *string

---

##### `MaxNumClusters`<sup>Required</sup> <a name="MaxNumClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.maxNumClusters"></a>

```go
func MaxNumClusters() *f64
```

- *Type:* *f64

---

##### `MinNumClusters`<sup>Required</sup> <a name="MinNumClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.minNumClusters"></a>

```go
func MinNumClusters() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NumActiveSessions`<sup>Required</sup> <a name="NumActiveSessions" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numActiveSessions"></a>

```go
func NumActiveSessions() *f64
```

- *Type:* *f64

---

##### `NumClusters`<sup>Required</sup> <a name="NumClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.numClusters"></a>

```go
func NumClusters() *f64
```

- *Type:* *f64

---

##### `SpotInstancePolicy`<sup>Required</sup> <a name="SpotInstancePolicy" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.spotInstancePolicy"></a>

```go
func SpotInstancePolicy() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `WarehouseType`<sup>Required</sup> <a name="WarehouseType" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.warehouseType"></a>

```go
func WarehouseType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouse.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSqlWarehouseChannel <a name="DataDatabricksSqlWarehouseChannel" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

&datadatabrickssqlwarehouse.DataDatabricksSqlWarehouseChannel {
	DbsqlVersion: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel.property.dbsqlVersion">DbsqlVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#dbsql_version DataDatabricksSqlWarehouse#dbsql_version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}. |

---

##### `DbsqlVersion`<sup>Optional</sup> <a name="DbsqlVersion" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel.property.dbsqlVersion"></a>

```go
DbsqlVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#dbsql_version DataDatabricksSqlWarehouse#dbsql_version}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}.

---

### DataDatabricksSqlWarehouseConfig <a name="DataDatabricksSqlWarehouseConfig" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

&datadatabrickssqlwarehouse.DataDatabricksSqlWarehouseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutoStopMins: *f64,
	Channel: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel,
	ClusterSize: *string,
	CreatorName: *string,
	DataSourceId: *string,
	EnablePhoton: interface{},
	EnableServerlessCompute: interface{},
	Health: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth,
	Id: *string,
	InstanceProfileArn: *string,
	JdbcUrl: *string,
	MaxNumClusters: *f64,
	MinNumClusters: *f64,
	Name: *string,
	NumActiveSessions: *f64,
	NumClusters: *f64,
	OdbcParams: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams,
	SpotInstancePolicy: *string,
	State: *string,
	Tags: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags,
	WarehouseType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.autoStopMins">AutoStopMins</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#auto_stop_mins DataDatabricksSqlWarehouse#auto_stop_mins}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.channel">Channel</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a></code> | channel block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.clusterSize">ClusterSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#cluster_size DataDatabricksSqlWarehouse#cluster_size}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.creatorName">CreatorName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#creator_name DataDatabricksSqlWarehouse#creator_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#data_source_id DataDatabricksSqlWarehouse#data_source_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.enablePhoton">EnablePhoton</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#enable_photon DataDatabricksSqlWarehouse#enable_photon}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.enableServerlessCompute">EnableServerlessCompute</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#enable_serverless_compute DataDatabricksSqlWarehouse#enable_serverless_compute}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.health">Health</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#id DataDatabricksSqlWarehouse#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#instance_profile_arn DataDatabricksSqlWarehouse#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.jdbcUrl">JdbcUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#jdbc_url DataDatabricksSqlWarehouse#jdbc_url}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.maxNumClusters">MaxNumClusters</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#max_num_clusters DataDatabricksSqlWarehouse#max_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.minNumClusters">MinNumClusters</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#min_num_clusters DataDatabricksSqlWarehouse#min_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.numActiveSessions">NumActiveSessions</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#num_active_sessions DataDatabricksSqlWarehouse#num_active_sessions}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.numClusters">NumClusters</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#num_clusters DataDatabricksSqlWarehouse#num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.odbcParams">OdbcParams</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a></code> | odbc_params block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.spotInstancePolicy">SpotInstancePolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#spot_instance_policy DataDatabricksSqlWarehouse#spot_instance_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#state DataDatabricksSqlWarehouse#state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a></code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.warehouseType">WarehouseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#warehouse_type DataDatabricksSqlWarehouse#warehouse_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoStopMins`<sup>Optional</sup> <a name="AutoStopMins" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.autoStopMins"></a>

```go
AutoStopMins *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#auto_stop_mins DataDatabricksSqlWarehouse#auto_stop_mins}.

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.channel"></a>

```go
Channel DataDatabricksSqlWarehouseChannel
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a>

channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#channel DataDatabricksSqlWarehouse#channel}

---

##### `ClusterSize`<sup>Optional</sup> <a name="ClusterSize" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.clusterSize"></a>

```go
ClusterSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#cluster_size DataDatabricksSqlWarehouse#cluster_size}.

---

##### `CreatorName`<sup>Optional</sup> <a name="CreatorName" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.creatorName"></a>

```go
CreatorName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#creator_name DataDatabricksSqlWarehouse#creator_name}.

---

##### `DataSourceId`<sup>Optional</sup> <a name="DataSourceId" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.dataSourceId"></a>

```go
DataSourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#data_source_id DataDatabricksSqlWarehouse#data_source_id}.

---

##### `EnablePhoton`<sup>Optional</sup> <a name="EnablePhoton" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.enablePhoton"></a>

```go
EnablePhoton interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#enable_photon DataDatabricksSqlWarehouse#enable_photon}.

---

##### `EnableServerlessCompute`<sup>Optional</sup> <a name="EnableServerlessCompute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.enableServerlessCompute"></a>

```go
EnableServerlessCompute interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#enable_serverless_compute DataDatabricksSqlWarehouse#enable_serverless_compute}.

---

##### `Health`<sup>Optional</sup> <a name="Health" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.health"></a>

```go
Health DataDatabricksSqlWarehouseHealth
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a>

health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#health DataDatabricksSqlWarehouse#health}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#id DataDatabricksSqlWarehouse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceProfileArn`<sup>Optional</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.instanceProfileArn"></a>

```go
InstanceProfileArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#instance_profile_arn DataDatabricksSqlWarehouse#instance_profile_arn}.

---

##### `JdbcUrl`<sup>Optional</sup> <a name="JdbcUrl" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.jdbcUrl"></a>

```go
JdbcUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#jdbc_url DataDatabricksSqlWarehouse#jdbc_url}.

---

##### `MaxNumClusters`<sup>Optional</sup> <a name="MaxNumClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.maxNumClusters"></a>

```go
MaxNumClusters *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#max_num_clusters DataDatabricksSqlWarehouse#max_num_clusters}.

---

##### `MinNumClusters`<sup>Optional</sup> <a name="MinNumClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.minNumClusters"></a>

```go
MinNumClusters *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#min_num_clusters DataDatabricksSqlWarehouse#min_num_clusters}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}.

---

##### `NumActiveSessions`<sup>Optional</sup> <a name="NumActiveSessions" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.numActiveSessions"></a>

```go
NumActiveSessions *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#num_active_sessions DataDatabricksSqlWarehouse#num_active_sessions}.

---

##### `NumClusters`<sup>Optional</sup> <a name="NumClusters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.numClusters"></a>

```go
NumClusters *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#num_clusters DataDatabricksSqlWarehouse#num_clusters}.

---

##### `OdbcParams`<sup>Optional</sup> <a name="OdbcParams" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.odbcParams"></a>

```go
OdbcParams DataDatabricksSqlWarehouseOdbcParams
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a>

odbc_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#odbc_params DataDatabricksSqlWarehouse#odbc_params}

---

##### `SpotInstancePolicy`<sup>Optional</sup> <a name="SpotInstancePolicy" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.spotInstancePolicy"></a>

```go
SpotInstancePolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#spot_instance_policy DataDatabricksSqlWarehouse#spot_instance_policy}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#state DataDatabricksSqlWarehouse#state}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.tags"></a>

```go
Tags DataDatabricksSqlWarehouseTags
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#tags DataDatabricksSqlWarehouse#tags}

---

##### `WarehouseType`<sup>Optional</sup> <a name="WarehouseType" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseConfig.property.warehouseType"></a>

```go
WarehouseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#warehouse_type DataDatabricksSqlWarehouse#warehouse_type}.

---

### DataDatabricksSqlWarehouseHealth <a name="DataDatabricksSqlWarehouseHealth" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

&datadatabrickssqlwarehouse.DataDatabricksSqlWarehouseHealth {
	Details: *string,
	FailureReason: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason,
	Message: *string,
	Status: *string,
	Summary: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.details">Details</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#details DataDatabricksSqlWarehouse#details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.failureReason">FailureReason</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a></code> | failure_reason block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.message">Message</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#message DataDatabricksSqlWarehouse#message}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#status DataDatabricksSqlWarehouse#status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.summary">Summary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#summary DataDatabricksSqlWarehouse#summary}. |

---

##### `Details`<sup>Optional</sup> <a name="Details" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.details"></a>

```go
Details *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#details DataDatabricksSqlWarehouse#details}.

---

##### `FailureReason`<sup>Optional</sup> <a name="FailureReason" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.failureReason"></a>

```go
FailureReason DataDatabricksSqlWarehouseHealthFailureReason
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a>

failure_reason block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#failure_reason DataDatabricksSqlWarehouse#failure_reason}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.message"></a>

```go
Message *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#message DataDatabricksSqlWarehouse#message}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#status DataDatabricksSqlWarehouse#status}.

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth.property.summary"></a>

```go
Summary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#summary DataDatabricksSqlWarehouse#summary}.

---

### DataDatabricksSqlWarehouseHealthFailureReason <a name="DataDatabricksSqlWarehouseHealthFailureReason" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

&datadatabrickssqlwarehouse.DataDatabricksSqlWarehouseHealthFailureReason {
	Code: *string,
	Parameters: *map[string]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.property.code">Code</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#code DataDatabricksSqlWarehouse#code}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#parameters DataDatabricksSqlWarehouse#parameters}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#type DataDatabricksSqlWarehouse#type}. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.property.code"></a>

```go
Code *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#code DataDatabricksSqlWarehouse#code}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#parameters DataDatabricksSqlWarehouse#parameters}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#type DataDatabricksSqlWarehouse#type}.

---

### DataDatabricksSqlWarehouseOdbcParams <a name="DataDatabricksSqlWarehouseOdbcParams" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

&datadatabrickssqlwarehouse.DataDatabricksSqlWarehouseOdbcParams {
	Hostname: *string,
	Path: *string,
	Port: *f64,
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.hostname">Hostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#hostname DataDatabricksSqlWarehouse#hostname}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#path DataDatabricksSqlWarehouse#path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#port DataDatabricksSqlWarehouse#port}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#protocol DataDatabricksSqlWarehouse#protocol}. |

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#hostname DataDatabricksSqlWarehouse#hostname}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#path DataDatabricksSqlWarehouse#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#port DataDatabricksSqlWarehouse#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#protocol DataDatabricksSqlWarehouse#protocol}.

---

### DataDatabricksSqlWarehouseTags <a name="DataDatabricksSqlWarehouseTags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

&datadatabrickssqlwarehouse.DataDatabricksSqlWarehouseTags {
	CustomTags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags.property.customTags">CustomTags</a></code> | <code>interface{}</code> | custom_tags block. |

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags.property.customTags"></a>

```go
CustomTags interface{}
```

- *Type:* interface{}

custom_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#custom_tags DataDatabricksSqlWarehouse#custom_tags}

---

### DataDatabricksSqlWarehouseTagsCustomTags <a name="DataDatabricksSqlWarehouseTagsCustomTags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

&datadatabrickssqlwarehouse.DataDatabricksSqlWarehouseTagsCustomTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#key DataDatabricksSqlWarehouse#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#value DataDatabricksSqlWarehouse#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#key DataDatabricksSqlWarehouse#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/sql_warehouse#value DataDatabricksSqlWarehouse#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSqlWarehouseChannelOutputReference <a name="DataDatabricksSqlWarehouseChannelOutputReference" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

datadatabrickssqlwarehouse.NewDataDatabricksSqlWarehouseChannelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksSqlWarehouseChannelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resetDbsqlVersion">ResetDbsqlVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbsqlVersion` <a name="ResetDbsqlVersion" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resetDbsqlVersion"></a>

```go
func ResetDbsqlVersion()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.dbsqlVersionInput">DbsqlVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.dbsqlVersion">DbsqlVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbsqlVersionInput`<sup>Optional</sup> <a name="DbsqlVersionInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.dbsqlVersionInput"></a>

```go
func DbsqlVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `DbsqlVersion`<sup>Required</sup> <a name="DbsqlVersion" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.dbsqlVersion"></a>

```go
func DbsqlVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannelOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksSqlWarehouseChannel
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseChannel">DataDatabricksSqlWarehouseChannel</a>

---


### DataDatabricksSqlWarehouseHealthFailureReasonOutputReference <a name="DataDatabricksSqlWarehouseHealthFailureReasonOutputReference" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

datadatabrickssqlwarehouse.NewDataDatabricksSqlWarehouseHealthFailureReasonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksSqlWarehouseHealthFailureReasonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resetCode"></a>

```go
func ResetCode()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.codeInput">CodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.codeInput"></a>

```go
func CodeInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksSqlWarehouseHealthFailureReason
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a>

---


### DataDatabricksSqlWarehouseHealthOutputReference <a name="DataDatabricksSqlWarehouseHealthOutputReference" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

datadatabrickssqlwarehouse.NewDataDatabricksSqlWarehouseHealthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksSqlWarehouseHealthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.putFailureReason">PutFailureReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetDetails">ResetDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetFailureReason">ResetFailureReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetSummary">ResetSummary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFailureReason` <a name="PutFailureReason" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.putFailureReason"></a>

```go
func PutFailureReason(value DataDatabricksSqlWarehouseHealthFailureReason)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.putFailureReason.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a>

---

##### `ResetDetails` <a name="ResetDetails" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetDetails"></a>

```go
func ResetDetails()
```

##### `ResetFailureReason` <a name="ResetFailureReason" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetFailureReason"></a>

```go
func ResetFailureReason()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.resetSummary"></a>

```go
func ResetSummary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.failureReason">FailureReason</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference">DataDatabricksSqlWarehouseHealthFailureReasonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.detailsInput">DetailsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.failureReasonInput">FailureReasonInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.summaryInput">SummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.details">Details</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.failureReason"></a>

```go
func FailureReason() DataDatabricksSqlWarehouseHealthFailureReasonOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReasonOutputReference">DataDatabricksSqlWarehouseHealthFailureReasonOutputReference</a>

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.detailsInput"></a>

```go
func DetailsInput() *string
```

- *Type:* *string

---

##### `FailureReasonInput`<sup>Optional</sup> <a name="FailureReasonInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.failureReasonInput"></a>

```go
func FailureReasonInput() DataDatabricksSqlWarehouseHealthFailureReason
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthFailureReason">DataDatabricksSqlWarehouseHealthFailureReason</a>

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.summaryInput"></a>

```go
func SummaryInput() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.details"></a>

```go
func Details() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealthOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksSqlWarehouseHealth
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseHealth">DataDatabricksSqlWarehouseHealth</a>

---


### DataDatabricksSqlWarehouseOdbcParamsOutputReference <a name="DataDatabricksSqlWarehouseOdbcParamsOutputReference" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

datadatabrickssqlwarehouse.NewDataDatabricksSqlWarehouseOdbcParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksSqlWarehouseOdbcParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksSqlWarehouseOdbcParams
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseOdbcParams">DataDatabricksSqlWarehouseOdbcParams</a>

---


### DataDatabricksSqlWarehouseTagsCustomTagsList <a name="DataDatabricksSqlWarehouseTagsCustomTagsList" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

datadatabrickssqlwarehouse.NewDataDatabricksSqlWarehouseTagsCustomTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksSqlWarehouseTagsCustomTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.get"></a>

```go
func Get(index *f64) DataDatabricksSqlWarehouseTagsCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksSqlWarehouseTagsCustomTagsOutputReference <a name="DataDatabricksSqlWarehouseTagsCustomTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

datadatabrickssqlwarehouse.NewDataDatabricksSqlWarehouseTagsCustomTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksSqlWarehouseTagsCustomTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksSqlWarehouseTagsOutputReference <a name="DataDatabricksSqlWarehouseTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssqlwarehouse"

datadatabrickssqlwarehouse.NewDataDatabricksSqlWarehouseTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksSqlWarehouseTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.putCustomTags">PutCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.resetCustomTags">ResetCustomTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomTags` <a name="PutCustomTags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.putCustomTags"></a>

```go
func PutCustomTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.putCustomTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.resetCustomTags"></a>

```go
func ResetCustomTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.customTags">CustomTags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList">DataDatabricksSqlWarehouseTagsCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.customTagsInput">CustomTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.customTags"></a>

```go
func CustomTags() DataDatabricksSqlWarehouseTagsCustomTagsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsCustomTagsList">DataDatabricksSqlWarehouseTagsCustomTagsList</a>

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.customTagsInput"></a>

```go
func CustomTagsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksSqlWarehouseTags
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSqlWarehouse.DataDatabricksSqlWarehouseTags">DataDatabricksSqlWarehouseTags</a>

---



