# `dataDatabricksCleanRoomAsset` Submodule <a name="`dataDatabricksCleanRoomAsset` Submodule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCleanRoomAsset <a name="DataDatabricksCleanRoomAsset" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset databricks_clean_room_asset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAsset(scope Construct, id *string, config DataDatabricksCleanRoomAssetConfig) DataDatabricksCleanRoomAsset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig">DataDatabricksCleanRoomAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig">DataDatabricksCleanRoomAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putForeignTable">PutForeignTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putForeignTableLocalDetails">PutForeignTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putNotebook">PutNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putTable">PutTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putTableLocalDetails">PutTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putView">PutView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putViewLocalDetails">PutViewLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putVolumeLocalDetails">PutVolumeLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetCleanRoomName">ResetCleanRoomName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetForeignTable">ResetForeignTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetForeignTableLocalDetails">ResetForeignTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetNotebook">ResetNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetTableLocalDetails">ResetTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetView">ResetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetViewLocalDetails">ResetViewLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetVolumeLocalDetails">ResetVolumeLocalDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutForeignTable` <a name="PutForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putForeignTable"></a>

```go
func PutForeignTable(value DataDatabricksCleanRoomAssetForeignTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putForeignTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a>

---

##### `PutForeignTableLocalDetails` <a name="PutForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putForeignTableLocalDetails"></a>

```go
func PutForeignTableLocalDetails(value DataDatabricksCleanRoomAssetForeignTableLocalDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putForeignTableLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a>

---

##### `PutNotebook` <a name="PutNotebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putNotebook"></a>

```go
func PutNotebook(value DataDatabricksCleanRoomAssetNotebook)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putNotebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a>

---

##### `PutTable` <a name="PutTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putTable"></a>

```go
func PutTable(value DataDatabricksCleanRoomAssetTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a>

---

##### `PutTableLocalDetails` <a name="PutTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putTableLocalDetails"></a>

```go
func PutTableLocalDetails(value DataDatabricksCleanRoomAssetTableLocalDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putTableLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a>

---

##### `PutView` <a name="PutView" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putView"></a>

```go
func PutView(value DataDatabricksCleanRoomAssetView)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a>

---

##### `PutViewLocalDetails` <a name="PutViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putViewLocalDetails"></a>

```go
func PutViewLocalDetails(value DataDatabricksCleanRoomAssetViewLocalDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putViewLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a>

---

##### `PutVolumeLocalDetails` <a name="PutVolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putVolumeLocalDetails"></a>

```go
func PutVolumeLocalDetails(value DataDatabricksCleanRoomAssetVolumeLocalDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putVolumeLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a>

---

##### `ResetCleanRoomName` <a name="ResetCleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetCleanRoomName"></a>

```go
func ResetCleanRoomName()
```

##### `ResetForeignTable` <a name="ResetForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetForeignTable"></a>

```go
func ResetForeignTable()
```

##### `ResetForeignTableLocalDetails` <a name="ResetForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetForeignTableLocalDetails"></a>

```go
func ResetForeignTableLocalDetails()
```

##### `ResetNotebook` <a name="ResetNotebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetNotebook"></a>

```go
func ResetNotebook()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetTable"></a>

```go
func ResetTable()
```

##### `ResetTableLocalDetails` <a name="ResetTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetTableLocalDetails"></a>

```go
func ResetTableLocalDetails()
```

##### `ResetView` <a name="ResetView" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetView"></a>

```go
func ResetView()
```

##### `ResetViewLocalDetails` <a name="ResetViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetViewLocalDetails"></a>

```go
func ResetViewLocalDetails()
```

##### `ResetVolumeLocalDetails` <a name="ResetVolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetVolumeLocalDetails"></a>

```go
func ResetVolumeLocalDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCleanRoomAsset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.DataDatabricksCleanRoomAsset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.DataDatabricksCleanRoomAsset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.DataDatabricksCleanRoomAsset_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.DataDatabricksCleanRoomAsset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksCleanRoomAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksCleanRoomAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksCleanRoomAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCleanRoomAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.addedAt">AddedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTable">ForeignTable</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference">DataDatabricksCleanRoomAssetForeignTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTableLocalDetails">ForeignTableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.notebook">Notebook</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference">DataDatabricksCleanRoomAssetNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.ownerCollaboratorAlias">OwnerCollaboratorAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.table">Table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference">DataDatabricksCleanRoomAssetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tableLocalDetails">TableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.view">View</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference">DataDatabricksCleanRoomAssetViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.viewLocalDetails">ViewLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference">DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.volumeLocalDetails">VolumeLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference">DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.assetTypeInput">AssetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.cleanRoomNameInput">CleanRoomNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTableInput">ForeignTableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTableLocalDetailsInput">ForeignTableLocalDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.notebookInput">NotebookInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tableInput">TableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tableLocalDetailsInput">TableLocalDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.viewInput">ViewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.viewLocalDetailsInput">ViewLocalDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.volumeLocalDetailsInput">VolumeLocalDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.assetType">AssetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.cleanRoomName">CleanRoomName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AddedAt`<sup>Required</sup> <a name="AddedAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.addedAt"></a>

```go
func AddedAt() *f64
```

- *Type:* *f64

---

##### `ForeignTable`<sup>Required</sup> <a name="ForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTable"></a>

```go
func ForeignTable() DataDatabricksCleanRoomAssetForeignTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference">DataDatabricksCleanRoomAssetForeignTableOutputReference</a>

---

##### `ForeignTableLocalDetails`<sup>Required</sup> <a name="ForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTableLocalDetails"></a>

```go
func ForeignTableLocalDetails() DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference</a>

---

##### `Notebook`<sup>Required</sup> <a name="Notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.notebook"></a>

```go
func Notebook() DataDatabricksCleanRoomAssetNotebookOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference">DataDatabricksCleanRoomAssetNotebookOutputReference</a>

---

##### `OwnerCollaboratorAlias`<sup>Required</sup> <a name="OwnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.ownerCollaboratorAlias"></a>

```go
func OwnerCollaboratorAlias() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.table"></a>

```go
func Table() DataDatabricksCleanRoomAssetTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference">DataDatabricksCleanRoomAssetTableOutputReference</a>

---

##### `TableLocalDetails`<sup>Required</sup> <a name="TableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tableLocalDetails"></a>

```go
func TableLocalDetails() DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference</a>

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.view"></a>

```go
func View() DataDatabricksCleanRoomAssetViewOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference">DataDatabricksCleanRoomAssetViewOutputReference</a>

---

##### `ViewLocalDetails`<sup>Required</sup> <a name="ViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.viewLocalDetails"></a>

```go
func ViewLocalDetails() DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference">DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference</a>

---

##### `VolumeLocalDetails`<sup>Required</sup> <a name="VolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.volumeLocalDetails"></a>

```go
func VolumeLocalDetails() DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference">DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference</a>

---

##### `AssetTypeInput`<sup>Optional</sup> <a name="AssetTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.assetTypeInput"></a>

```go
func AssetTypeInput() *string
```

- *Type:* *string

---

##### `CleanRoomNameInput`<sup>Optional</sup> <a name="CleanRoomNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.cleanRoomNameInput"></a>

```go
func CleanRoomNameInput() *string
```

- *Type:* *string

---

##### `ForeignTableInput`<sup>Optional</sup> <a name="ForeignTableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTableInput"></a>

```go
func ForeignTableInput() interface{}
```

- *Type:* interface{}

---

##### `ForeignTableLocalDetailsInput`<sup>Optional</sup> <a name="ForeignTableLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTableLocalDetailsInput"></a>

```go
func ForeignTableLocalDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotebookInput`<sup>Optional</sup> <a name="NotebookInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.notebookInput"></a>

```go
func NotebookInput() interface{}
```

- *Type:* interface{}

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tableInput"></a>

```go
func TableInput() interface{}
```

- *Type:* interface{}

---

##### `TableLocalDetailsInput`<sup>Optional</sup> <a name="TableLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tableLocalDetailsInput"></a>

```go
func TableLocalDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.viewInput"></a>

```go
func ViewInput() interface{}
```

- *Type:* interface{}

---

##### `ViewLocalDetailsInput`<sup>Optional</sup> <a name="ViewLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.viewLocalDetailsInput"></a>

```go
func ViewLocalDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeLocalDetailsInput`<sup>Optional</sup> <a name="VolumeLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.volumeLocalDetailsInput"></a>

```go
func VolumeLocalDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.assetType"></a>

```go
func AssetType() *string
```

- *Type:* *string

---

##### `CleanRoomName`<sup>Required</sup> <a name="CleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.cleanRoomName"></a>

```go
func CleanRoomName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCleanRoomAssetConfig <a name="DataDatabricksCleanRoomAssetConfig" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

&datadatabrickscleanroomasset.DataDatabricksCleanRoomAssetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AssetType: *string,
	Name: *string,
	CleanRoomName: *string,
	ForeignTable: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable,
	ForeignTableLocalDetails: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails,
	Notebook: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook,
	Table: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable,
	TableLocalDetails: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails,
	View: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView,
	ViewLocalDetails: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails,
	VolumeLocalDetails: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.assetType">AssetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#asset_type DataDatabricksCleanRoomAsset#asset_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.cleanRoomName">CleanRoomName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#clean_room_name DataDatabricksCleanRoomAsset#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.foreignTable">ForeignTable</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#foreign_table DataDatabricksCleanRoomAsset#foreign_table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.foreignTableLocalDetails">ForeignTableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#foreign_table_local_details DataDatabricksCleanRoomAsset#foreign_table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.notebook">Notebook</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#notebook DataDatabricksCleanRoomAsset#notebook}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.table">Table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#table DataDatabricksCleanRoomAsset#table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.tableLocalDetails">TableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#table_local_details DataDatabricksCleanRoomAsset#table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.view">View</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#view DataDatabricksCleanRoomAsset#view}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.viewLocalDetails">ViewLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#view_local_details DataDatabricksCleanRoomAsset#view_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.volumeLocalDetails">VolumeLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#volume_local_details DataDatabricksCleanRoomAsset#volume_local_details}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.assetType"></a>

```go
AssetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#asset_type DataDatabricksCleanRoomAsset#asset_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}.

---

##### `CleanRoomName`<sup>Optional</sup> <a name="CleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.cleanRoomName"></a>

```go
CleanRoomName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#clean_room_name DataDatabricksCleanRoomAsset#clean_room_name}.

---

##### `ForeignTable`<sup>Optional</sup> <a name="ForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.foreignTable"></a>

```go
ForeignTable DataDatabricksCleanRoomAssetForeignTable
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#foreign_table DataDatabricksCleanRoomAsset#foreign_table}.

---

##### `ForeignTableLocalDetails`<sup>Optional</sup> <a name="ForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.foreignTableLocalDetails"></a>

```go
ForeignTableLocalDetails DataDatabricksCleanRoomAssetForeignTableLocalDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#foreign_table_local_details DataDatabricksCleanRoomAsset#foreign_table_local_details}.

---

##### `Notebook`<sup>Optional</sup> <a name="Notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.notebook"></a>

```go
Notebook DataDatabricksCleanRoomAssetNotebook
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#notebook DataDatabricksCleanRoomAsset#notebook}.

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.table"></a>

```go
Table DataDatabricksCleanRoomAssetTable
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#table DataDatabricksCleanRoomAsset#table}.

---

##### `TableLocalDetails`<sup>Optional</sup> <a name="TableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.tableLocalDetails"></a>

```go
TableLocalDetails DataDatabricksCleanRoomAssetTableLocalDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#table_local_details DataDatabricksCleanRoomAsset#table_local_details}.

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.view"></a>

```go
View DataDatabricksCleanRoomAssetView
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#view DataDatabricksCleanRoomAsset#view}.

---

##### `ViewLocalDetails`<sup>Optional</sup> <a name="ViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.viewLocalDetails"></a>

```go
ViewLocalDetails DataDatabricksCleanRoomAssetViewLocalDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#view_local_details DataDatabricksCleanRoomAsset#view_local_details}.

---

##### `VolumeLocalDetails`<sup>Optional</sup> <a name="VolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.volumeLocalDetails"></a>

```go
VolumeLocalDetails DataDatabricksCleanRoomAssetVolumeLocalDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#volume_local_details DataDatabricksCleanRoomAsset#volume_local_details}.

---

### DataDatabricksCleanRoomAssetForeignTable <a name="DataDatabricksCleanRoomAssetForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

&datadatabrickscleanroomasset.DataDatabricksCleanRoomAssetForeignTable {

}
```


### DataDatabricksCleanRoomAssetForeignTableColumns <a name="DataDatabricksCleanRoomAssetForeignTableColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

&datadatabrickscleanroomasset.DataDatabricksCleanRoomAssetForeignTableColumns {
	Comment: *string,
	Mask: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask,
	Name: *string,
	Nullable: interface{},
	PartitionIndex: *f64,
	Position: *f64,
	TypeIntervalType: *string,
	TypeJson: *string,
	TypeName: *string,
	TypePrecision: *f64,
	TypeScale: *f64,
	TypeText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetForeignTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#mask DataDatabricksCleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.nullable">Nullable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#nullable DataDatabricksCleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.partitionIndex">PartitionIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#partition_index DataDatabricksCleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.position">Position</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#position DataDatabricksCleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeIntervalType">TypeIntervalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_interval_type DataDatabricksCleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeJson">TypeJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_json DataDatabricksCleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeName">TypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_name DataDatabricksCleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typePrecision">TypePrecision</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_precision DataDatabricksCleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeScale">TypeScale</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_scale DataDatabricksCleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeText">TypeText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_text DataDatabricksCleanRoomAsset#type_text}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}.

---

##### `Mask`<sup>Optional</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.mask"></a>

```go
Mask DataDatabricksCleanRoomAssetForeignTableColumnsMask
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetForeignTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#mask DataDatabricksCleanRoomAsset#mask}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}.

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.nullable"></a>

```go
Nullable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#nullable DataDatabricksCleanRoomAsset#nullable}.

---

##### `PartitionIndex`<sup>Optional</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.partitionIndex"></a>

```go
PartitionIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#partition_index DataDatabricksCleanRoomAsset#partition_index}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.position"></a>

```go
Position *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#position DataDatabricksCleanRoomAsset#position}.

---

##### `TypeIntervalType`<sup>Optional</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeIntervalType"></a>

```go
TypeIntervalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_interval_type DataDatabricksCleanRoomAsset#type_interval_type}.

---

##### `TypeJson`<sup>Optional</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeJson"></a>

```go
TypeJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_json DataDatabricksCleanRoomAsset#type_json}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_name DataDatabricksCleanRoomAsset#type_name}.

---

##### `TypePrecision`<sup>Optional</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typePrecision"></a>

```go
TypePrecision *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_precision DataDatabricksCleanRoomAsset#type_precision}.

---

##### `TypeScale`<sup>Optional</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeScale"></a>

```go
TypeScale *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_scale DataDatabricksCleanRoomAsset#type_scale}.

---

##### `TypeText`<sup>Optional</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeText"></a>

```go
TypeText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_text DataDatabricksCleanRoomAsset#type_text}.

---

### DataDatabricksCleanRoomAssetForeignTableColumnsMask <a name="DataDatabricksCleanRoomAssetForeignTableColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

&datadatabrickscleanroomasset.DataDatabricksCleanRoomAssetForeignTableColumnsMask {
	FunctionName: *string,
	UsingColumnNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask.property.functionName">FunctionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask.property.usingColumnNames">UsingColumnNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}. |

---

##### `FunctionName`<sup>Optional</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}.

---

##### `UsingColumnNames`<sup>Optional</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask.property.usingColumnNames"></a>

```go
UsingColumnNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}.

---

### DataDatabricksCleanRoomAssetForeignTableLocalDetails <a name="DataDatabricksCleanRoomAssetForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

&datadatabrickscleanroomasset.DataDatabricksCleanRoomAssetForeignTableLocalDetails {
	LocalName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails.property.localName">LocalName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}. |

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails.property.localName"></a>

```go
LocalName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}.

---

### DataDatabricksCleanRoomAssetNotebook <a name="DataDatabricksCleanRoomAssetNotebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

&datadatabrickscleanroomasset.DataDatabricksCleanRoomAssetNotebook {
	NotebookContent: *string,
	RunnerCollaboratorAliases: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook.property.notebookContent">NotebookContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#notebook_content DataDatabricksCleanRoomAsset#notebook_content}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook.property.runnerCollaboratorAliases">RunnerCollaboratorAliases</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#runner_collaborator_aliases DataDatabricksCleanRoomAsset#runner_collaborator_aliases}. |

---

##### `NotebookContent`<sup>Required</sup> <a name="NotebookContent" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook.property.notebookContent"></a>

```go
NotebookContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#notebook_content DataDatabricksCleanRoomAsset#notebook_content}.

---

##### `RunnerCollaboratorAliases`<sup>Optional</sup> <a name="RunnerCollaboratorAliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook.property.runnerCollaboratorAliases"></a>

```go
RunnerCollaboratorAliases *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#runner_collaborator_aliases DataDatabricksCleanRoomAsset#runner_collaborator_aliases}.

---

### DataDatabricksCleanRoomAssetNotebookReviews <a name="DataDatabricksCleanRoomAssetNotebookReviews" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

&datadatabrickscleanroomasset.DataDatabricksCleanRoomAssetNotebookReviews {
	Comment: *string,
	CreatedAtMillis: *f64,
	ReviewerCollaboratorAlias: *string,
	ReviewState: *string,
	ReviewSubReason: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.createdAtMillis">CreatedAtMillis</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#created_at_millis DataDatabricksCleanRoomAsset#created_at_millis}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.reviewerCollaboratorAlias">ReviewerCollaboratorAlias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#reviewer_collaborator_alias DataDatabricksCleanRoomAsset#reviewer_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.reviewState">ReviewState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#review_state DataDatabricksCleanRoomAsset#review_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.reviewSubReason">ReviewSubReason</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#review_sub_reason DataDatabricksCleanRoomAsset#review_sub_reason}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}.

---

##### `CreatedAtMillis`<sup>Optional</sup> <a name="CreatedAtMillis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.createdAtMillis"></a>

```go
CreatedAtMillis *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#created_at_millis DataDatabricksCleanRoomAsset#created_at_millis}.

---

##### `ReviewerCollaboratorAlias`<sup>Optional</sup> <a name="ReviewerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.reviewerCollaboratorAlias"></a>

```go
ReviewerCollaboratorAlias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#reviewer_collaborator_alias DataDatabricksCleanRoomAsset#reviewer_collaborator_alias}.

---

##### `ReviewState`<sup>Optional</sup> <a name="ReviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.reviewState"></a>

```go
ReviewState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#review_state DataDatabricksCleanRoomAsset#review_state}.

---

##### `ReviewSubReason`<sup>Optional</sup> <a name="ReviewSubReason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.reviewSubReason"></a>

```go
ReviewSubReason *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#review_sub_reason DataDatabricksCleanRoomAsset#review_sub_reason}.

---

### DataDatabricksCleanRoomAssetTable <a name="DataDatabricksCleanRoomAssetTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

&datadatabrickscleanroomasset.DataDatabricksCleanRoomAssetTable {

}
```


### DataDatabricksCleanRoomAssetTableColumns <a name="DataDatabricksCleanRoomAssetTableColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

&datadatabrickscleanroomasset.DataDatabricksCleanRoomAssetTableColumns {
	Comment: *string,
	Mask: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask,
	Name: *string,
	Nullable: interface{},
	PartitionIndex: *f64,
	Position: *f64,
	TypeIntervalType: *string,
	TypeJson: *string,
	TypeName: *string,
	TypePrecision: *f64,
	TypeScale: *f64,
	TypeText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#mask DataDatabricksCleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.nullable">Nullable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#nullable DataDatabricksCleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.partitionIndex">PartitionIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#partition_index DataDatabricksCleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.position">Position</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#position DataDatabricksCleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeIntervalType">TypeIntervalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_interval_type DataDatabricksCleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeJson">TypeJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_json DataDatabricksCleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeName">TypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_name DataDatabricksCleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typePrecision">TypePrecision</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_precision DataDatabricksCleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeScale">TypeScale</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_scale DataDatabricksCleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeText">TypeText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_text DataDatabricksCleanRoomAsset#type_text}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}.

---

##### `Mask`<sup>Optional</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.mask"></a>

```go
Mask DataDatabricksCleanRoomAssetTableColumnsMask
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#mask DataDatabricksCleanRoomAsset#mask}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}.

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.nullable"></a>

```go
Nullable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#nullable DataDatabricksCleanRoomAsset#nullable}.

---

##### `PartitionIndex`<sup>Optional</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.partitionIndex"></a>

```go
PartitionIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#partition_index DataDatabricksCleanRoomAsset#partition_index}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.position"></a>

```go
Position *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#position DataDatabricksCleanRoomAsset#position}.

---

##### `TypeIntervalType`<sup>Optional</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeIntervalType"></a>

```go
TypeIntervalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_interval_type DataDatabricksCleanRoomAsset#type_interval_type}.

---

##### `TypeJson`<sup>Optional</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeJson"></a>

```go
TypeJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_json DataDatabricksCleanRoomAsset#type_json}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_name DataDatabricksCleanRoomAsset#type_name}.

---

##### `TypePrecision`<sup>Optional</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typePrecision"></a>

```go
TypePrecision *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_precision DataDatabricksCleanRoomAsset#type_precision}.

---

##### `TypeScale`<sup>Optional</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeScale"></a>

```go
TypeScale *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_scale DataDatabricksCleanRoomAsset#type_scale}.

---

##### `TypeText`<sup>Optional</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeText"></a>

```go
TypeText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_text DataDatabricksCleanRoomAsset#type_text}.

---

### DataDatabricksCleanRoomAssetTableColumnsMask <a name="DataDatabricksCleanRoomAssetTableColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

&datadatabrickscleanroomasset.DataDatabricksCleanRoomAssetTableColumnsMask {
	FunctionName: *string,
	UsingColumnNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask.property.functionName">FunctionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask.property.usingColumnNames">UsingColumnNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}. |

---

##### `FunctionName`<sup>Optional</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}.

---

##### `UsingColumnNames`<sup>Optional</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask.property.usingColumnNames"></a>

```go
UsingColumnNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}.

---

### DataDatabricksCleanRoomAssetTableLocalDetails <a name="DataDatabricksCleanRoomAssetTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

&datadatabrickscleanroomasset.DataDatabricksCleanRoomAssetTableLocalDetails {
	LocalName: *string,
	Partitions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails.property.localName">LocalName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails.property.partitions">Partitions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#partitions DataDatabricksCleanRoomAsset#partitions}. |

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails.property.localName"></a>

```go
LocalName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}.

---

##### `Partitions`<sup>Optional</sup> <a name="Partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails.property.partitions"></a>

```go
Partitions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#partitions DataDatabricksCleanRoomAsset#partitions}.

---

### DataDatabricksCleanRoomAssetTableLocalDetailsPartitions <a name="DataDatabricksCleanRoomAssetTableLocalDetailsPartitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

&datadatabrickscleanroomasset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions {
	Value: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions.property.value">Value</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#value DataDatabricksCleanRoomAsset#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions.property.value"></a>

```go
Value interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#value DataDatabricksCleanRoomAsset#value}.

---

### DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue <a name="DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

&datadatabrickscleanroomasset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue {
	Name: *string,
	Op: *string,
	RecipientPropertyKey: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.op">Op</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#op DataDatabricksCleanRoomAsset#op}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.recipientPropertyKey">RecipientPropertyKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#recipient_property_key DataDatabricksCleanRoomAsset#recipient_property_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#value DataDatabricksCleanRoomAsset#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}.

---

##### `Op`<sup>Optional</sup> <a name="Op" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.op"></a>

```go
Op *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#op DataDatabricksCleanRoomAsset#op}.

---

##### `RecipientPropertyKey`<sup>Optional</sup> <a name="RecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.recipientPropertyKey"></a>

```go
RecipientPropertyKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#recipient_property_key DataDatabricksCleanRoomAsset#recipient_property_key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#value DataDatabricksCleanRoomAsset#value}.

---

### DataDatabricksCleanRoomAssetView <a name="DataDatabricksCleanRoomAssetView" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

&datadatabrickscleanroomasset.DataDatabricksCleanRoomAssetView {

}
```


### DataDatabricksCleanRoomAssetViewColumns <a name="DataDatabricksCleanRoomAssetViewColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

&datadatabrickscleanroomasset.DataDatabricksCleanRoomAssetViewColumns {
	Comment: *string,
	Mask: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask,
	Name: *string,
	Nullable: interface{},
	PartitionIndex: *f64,
	Position: *f64,
	TypeIntervalType: *string,
	TypeJson: *string,
	TypeName: *string,
	TypePrecision: *f64,
	TypeScale: *f64,
	TypeText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetViewColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#mask DataDatabricksCleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.nullable">Nullable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#nullable DataDatabricksCleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.partitionIndex">PartitionIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#partition_index DataDatabricksCleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.position">Position</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#position DataDatabricksCleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeIntervalType">TypeIntervalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_interval_type DataDatabricksCleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeJson">TypeJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_json DataDatabricksCleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeName">TypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_name DataDatabricksCleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typePrecision">TypePrecision</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_precision DataDatabricksCleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeScale">TypeScale</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_scale DataDatabricksCleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeText">TypeText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_text DataDatabricksCleanRoomAsset#type_text}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}.

---

##### `Mask`<sup>Optional</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.mask"></a>

```go
Mask DataDatabricksCleanRoomAssetViewColumnsMask
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetViewColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#mask DataDatabricksCleanRoomAsset#mask}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}.

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.nullable"></a>

```go
Nullable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#nullable DataDatabricksCleanRoomAsset#nullable}.

---

##### `PartitionIndex`<sup>Optional</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.partitionIndex"></a>

```go
PartitionIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#partition_index DataDatabricksCleanRoomAsset#partition_index}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.position"></a>

```go
Position *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#position DataDatabricksCleanRoomAsset#position}.

---

##### `TypeIntervalType`<sup>Optional</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeIntervalType"></a>

```go
TypeIntervalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_interval_type DataDatabricksCleanRoomAsset#type_interval_type}.

---

##### `TypeJson`<sup>Optional</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeJson"></a>

```go
TypeJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_json DataDatabricksCleanRoomAsset#type_json}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_name DataDatabricksCleanRoomAsset#type_name}.

---

##### `TypePrecision`<sup>Optional</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typePrecision"></a>

```go
TypePrecision *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_precision DataDatabricksCleanRoomAsset#type_precision}.

---

##### `TypeScale`<sup>Optional</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeScale"></a>

```go
TypeScale *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_scale DataDatabricksCleanRoomAsset#type_scale}.

---

##### `TypeText`<sup>Optional</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeText"></a>

```go
TypeText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#type_text DataDatabricksCleanRoomAsset#type_text}.

---

### DataDatabricksCleanRoomAssetViewColumnsMask <a name="DataDatabricksCleanRoomAssetViewColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

&datadatabrickscleanroomasset.DataDatabricksCleanRoomAssetViewColumnsMask {
	FunctionName: *string,
	UsingColumnNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask.property.functionName">FunctionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask.property.usingColumnNames">UsingColumnNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}. |

---

##### `FunctionName`<sup>Optional</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}.

---

##### `UsingColumnNames`<sup>Optional</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask.property.usingColumnNames"></a>

```go
UsingColumnNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}.

---

### DataDatabricksCleanRoomAssetViewLocalDetails <a name="DataDatabricksCleanRoomAssetViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

&datadatabrickscleanroomasset.DataDatabricksCleanRoomAssetViewLocalDetails {
	LocalName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails.property.localName">LocalName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}. |

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails.property.localName"></a>

```go
LocalName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}.

---

### DataDatabricksCleanRoomAssetVolumeLocalDetails <a name="DataDatabricksCleanRoomAssetVolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

&datadatabrickscleanroomasset.DataDatabricksCleanRoomAssetVolumeLocalDetails {
	LocalName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails.property.localName">LocalName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}. |

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails.property.localName"></a>

```go
LocalName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCleanRoomAssetForeignTableColumnsList <a name="DataDatabricksCleanRoomAssetForeignTableColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetForeignTableColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksCleanRoomAssetForeignTableColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.get"></a>

```go
func Get(index *f64) DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resetFunctionName">ResetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resetUsingColumnNames">ResetUsingColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctionName` <a name="ResetFunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resetFunctionName"></a>

```go
func ResetFunctionName()
```

##### `ResetUsingColumnNames` <a name="ResetUsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```go
func ResetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput">UsingColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNames">UsingColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `UsingColumnNamesInput`<sup>Optional</sup> <a name="UsingColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```go
func UsingColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `UsingColumnNames`<sup>Required</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```go
func UsingColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference <a name="DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetForeignTableColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.putMask">PutMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetMask">ResetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetNullable">ResetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetPartitionIndex">ResetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeIntervalType">ResetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeJson">ResetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypePrecision">ResetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeScale">ResetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeText">ResetTypeText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMask` <a name="PutMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.putMask"></a>

```go
func PutMask(value DataDatabricksCleanRoomAssetForeignTableColumnsMask)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetForeignTableColumnsMask</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetMask` <a name="ResetMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetMask"></a>

```go
func ResetMask()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNullable` <a name="ResetNullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetNullable"></a>

```go
func ResetNullable()
```

##### `ResetPartitionIndex` <a name="ResetPartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetPartitionIndex"></a>

```go
func ResetPartitionIndex()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetPosition"></a>

```go
func ResetPosition()
```

##### `ResetTypeIntervalType` <a name="ResetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeIntervalType"></a>

```go
func ResetTypeIntervalType()
```

##### `ResetTypeJson` <a name="ResetTypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeJson"></a>

```go
func ResetTypeJson()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeName"></a>

```go
func ResetTypeName()
```

##### `ResetTypePrecision` <a name="ResetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypePrecision"></a>

```go
func ResetTypePrecision()
```

##### `ResetTypeScale` <a name="ResetTypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeScale"></a>

```go
func ResetTypeScale()
```

##### `ResetTypeText` <a name="ResetTypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeText"></a>

```go
func ResetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.maskInput">MaskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.nullableInput">NullableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndexInput">PartitionIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.positionInput">PositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalTypeInput">TypeIntervalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeJsonInput">TypeJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typePrecisionInput">TypePrecisionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeScaleInput">TypeScaleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeTextInput">TypeTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.nullable">Nullable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndex">PartitionIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalType">TypeIntervalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeJson">TypeJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typePrecision">TypePrecision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeScale">TypeScale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeText">TypeText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns">DataDatabricksCleanRoomAssetForeignTableColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mask`<sup>Required</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.mask"></a>

```go
func Mask() DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `MaskInput`<sup>Optional</sup> <a name="MaskInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.maskInput"></a>

```go
func MaskInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NullableInput`<sup>Optional</sup> <a name="NullableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.nullableInput"></a>

```go
func NullableInput() interface{}
```

- *Type:* interface{}

---

##### `PartitionIndexInput`<sup>Optional</sup> <a name="PartitionIndexInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndexInput"></a>

```go
func PartitionIndexInput() *f64
```

- *Type:* *f64

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.positionInput"></a>

```go
func PositionInput() *f64
```

- *Type:* *f64

---

##### `TypeIntervalTypeInput`<sup>Optional</sup> <a name="TypeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```go
func TypeIntervalTypeInput() *string
```

- *Type:* *string

---

##### `TypeJsonInput`<sup>Optional</sup> <a name="TypeJsonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeJsonInput"></a>

```go
func TypeJsonInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `TypePrecisionInput`<sup>Optional</sup> <a name="TypePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typePrecisionInput"></a>

```go
func TypePrecisionInput() *f64
```

- *Type:* *f64

---

##### `TypeScaleInput`<sup>Optional</sup> <a name="TypeScaleInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeScaleInput"></a>

```go
func TypeScaleInput() *f64
```

- *Type:* *f64

---

##### `TypeTextInput`<sup>Optional</sup> <a name="TypeTextInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeTextInput"></a>

```go
func TypeTextInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Nullable`<sup>Required</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.nullable"></a>

```go
func Nullable() interface{}
```

- *Type:* interface{}

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndex"></a>

```go
func PartitionIndex() *f64
```

- *Type:* *f64

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `TypeIntervalType`<sup>Required</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalType"></a>

```go
func TypeIntervalType() *string
```

- *Type:* *string

---

##### `TypeJson`<sup>Required</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeJson"></a>

```go
func TypeJson() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `TypePrecision`<sup>Required</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typePrecision"></a>

```go
func TypePrecision() *f64
```

- *Type:* *f64

---

##### `TypeScale`<sup>Required</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeScale"></a>

```go
func TypeScale() *f64
```

- *Type:* *f64

---

##### `TypeText`<sup>Required</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeText"></a>

```go
func TypeText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksCleanRoomAssetForeignTableColumns
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns">DataDatabricksCleanRoomAssetForeignTableColumns</a>

---


### DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.localNameInput">LocalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.localName">LocalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalNameInput`<sup>Optional</sup> <a name="LocalNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.localNameInput"></a>

```go
func LocalNameInput() *string
```

- *Type:* *string

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.localName"></a>

```go
func LocalName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomAssetForeignTableOutputReference <a name="DataDatabricksCleanRoomAssetForeignTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetForeignTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomAssetForeignTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList">DataDatabricksCleanRoomAssetForeignTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.columns"></a>

```go
func Columns() DataDatabricksCleanRoomAssetForeignTableColumnsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList">DataDatabricksCleanRoomAssetForeignTableColumnsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomAssetNotebookOutputReference <a name="DataDatabricksCleanRoomAssetNotebookOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetNotebookOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomAssetNotebookOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.resetRunnerCollaboratorAliases">ResetRunnerCollaboratorAliases</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRunnerCollaboratorAliases` <a name="ResetRunnerCollaboratorAliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.resetRunnerCollaboratorAliases"></a>

```go
func ResetRunnerCollaboratorAliases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.reviews">Reviews</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList">DataDatabricksCleanRoomAssetNotebookReviewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.reviewState">ReviewState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.notebookContentInput">NotebookContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliasesInput">RunnerCollaboratorAliasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.notebookContent">NotebookContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliases">RunnerCollaboratorAliases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Reviews`<sup>Required</sup> <a name="Reviews" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.reviews"></a>

```go
func Reviews() DataDatabricksCleanRoomAssetNotebookReviewsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList">DataDatabricksCleanRoomAssetNotebookReviewsList</a>

---

##### `ReviewState`<sup>Required</sup> <a name="ReviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.reviewState"></a>

```go
func ReviewState() *string
```

- *Type:* *string

---

##### `NotebookContentInput`<sup>Optional</sup> <a name="NotebookContentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.notebookContentInput"></a>

```go
func NotebookContentInput() *string
```

- *Type:* *string

---

##### `RunnerCollaboratorAliasesInput`<sup>Optional</sup> <a name="RunnerCollaboratorAliasesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliasesInput"></a>

```go
func RunnerCollaboratorAliasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotebookContent`<sup>Required</sup> <a name="NotebookContent" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.notebookContent"></a>

```go
func NotebookContent() *string
```

- *Type:* *string

---

##### `RunnerCollaboratorAliases`<sup>Required</sup> <a name="RunnerCollaboratorAliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliases"></a>

```go
func RunnerCollaboratorAliases() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomAssetNotebookReviewsList <a name="DataDatabricksCleanRoomAssetNotebookReviewsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetNotebookReviewsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksCleanRoomAssetNotebookReviewsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.get"></a>

```go
func Get(index *f64) DataDatabricksCleanRoomAssetNotebookReviewsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomAssetNotebookReviewsOutputReference <a name="DataDatabricksCleanRoomAssetNotebookReviewsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetNotebookReviewsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksCleanRoomAssetNotebookReviewsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetCreatedAtMillis">ResetCreatedAtMillis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetReviewerCollaboratorAlias">ResetReviewerCollaboratorAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetReviewState">ResetReviewState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetReviewSubReason">ResetReviewSubReason</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetCreatedAtMillis` <a name="ResetCreatedAtMillis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetCreatedAtMillis"></a>

```go
func ResetCreatedAtMillis()
```

##### `ResetReviewerCollaboratorAlias` <a name="ResetReviewerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetReviewerCollaboratorAlias"></a>

```go
func ResetReviewerCollaboratorAlias()
```

##### `ResetReviewState` <a name="ResetReviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetReviewState"></a>

```go
func ResetReviewState()
```

##### `ResetReviewSubReason` <a name="ResetReviewSubReason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetReviewSubReason"></a>

```go
func ResetReviewSubReason()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillisInput">CreatedAtMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput">ReviewerCollaboratorAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewStateInput">ReviewStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReasonInput">ReviewSubReasonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillis">CreatedAtMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAlias">ReviewerCollaboratorAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewState">ReviewState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReason">ReviewSubReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews">DataDatabricksCleanRoomAssetNotebookReviews</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CreatedAtMillisInput`<sup>Optional</sup> <a name="CreatedAtMillisInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillisInput"></a>

```go
func CreatedAtMillisInput() *f64
```

- *Type:* *f64

---

##### `ReviewerCollaboratorAliasInput`<sup>Optional</sup> <a name="ReviewerCollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput"></a>

```go
func ReviewerCollaboratorAliasInput() *string
```

- *Type:* *string

---

##### `ReviewStateInput`<sup>Optional</sup> <a name="ReviewStateInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewStateInput"></a>

```go
func ReviewStateInput() *string
```

- *Type:* *string

---

##### `ReviewSubReasonInput`<sup>Optional</sup> <a name="ReviewSubReasonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReasonInput"></a>

```go
func ReviewSubReasonInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedAtMillis`<sup>Required</sup> <a name="CreatedAtMillis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillis"></a>

```go
func CreatedAtMillis() *f64
```

- *Type:* *f64

---

##### `ReviewerCollaboratorAlias`<sup>Required</sup> <a name="ReviewerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAlias"></a>

```go
func ReviewerCollaboratorAlias() *string
```

- *Type:* *string

---

##### `ReviewState`<sup>Required</sup> <a name="ReviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewState"></a>

```go
func ReviewState() *string
```

- *Type:* *string

---

##### `ReviewSubReason`<sup>Required</sup> <a name="ReviewSubReason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReason"></a>

```go
func ReviewSubReason() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksCleanRoomAssetNotebookReviews
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews">DataDatabricksCleanRoomAssetNotebookReviews</a>

---


### DataDatabricksCleanRoomAssetTableColumnsList <a name="DataDatabricksCleanRoomAssetTableColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetTableColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksCleanRoomAssetTableColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.get"></a>

```go
func Get(index *f64) DataDatabricksCleanRoomAssetTableColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetTableColumnsMaskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resetFunctionName">ResetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resetUsingColumnNames">ResetUsingColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctionName` <a name="ResetFunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resetFunctionName"></a>

```go
func ResetFunctionName()
```

##### `ResetUsingColumnNames` <a name="ResetUsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```go
func ResetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNamesInput">UsingColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNames">UsingColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `UsingColumnNamesInput`<sup>Optional</sup> <a name="UsingColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```go
func UsingColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `UsingColumnNames`<sup>Required</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```go
func UsingColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomAssetTableColumnsOutputReference <a name="DataDatabricksCleanRoomAssetTableColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetTableColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksCleanRoomAssetTableColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.putMask">PutMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetMask">ResetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetNullable">ResetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetPartitionIndex">ResetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeIntervalType">ResetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeJson">ResetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypePrecision">ResetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeScale">ResetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeText">ResetTypeText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMask` <a name="PutMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.putMask"></a>

```go
func PutMask(value DataDatabricksCleanRoomAssetTableColumnsMask)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetTableColumnsMask</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetMask` <a name="ResetMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetMask"></a>

```go
func ResetMask()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNullable` <a name="ResetNullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetNullable"></a>

```go
func ResetNullable()
```

##### `ResetPartitionIndex` <a name="ResetPartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetPartitionIndex"></a>

```go
func ResetPartitionIndex()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetPosition"></a>

```go
func ResetPosition()
```

##### `ResetTypeIntervalType` <a name="ResetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeIntervalType"></a>

```go
func ResetTypeIntervalType()
```

##### `ResetTypeJson` <a name="ResetTypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeJson"></a>

```go
func ResetTypeJson()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeName"></a>

```go
func ResetTypeName()
```

##### `ResetTypePrecision` <a name="ResetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypePrecision"></a>

```go
func ResetTypePrecision()
```

##### `ResetTypeScale` <a name="ResetTypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeScale"></a>

```go
func ResetTypeScale()
```

##### `ResetTypeText` <a name="ResetTypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeText"></a>

```go
func ResetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.maskInput">MaskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.nullableInput">NullableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.partitionIndexInput">PartitionIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.positionInput">PositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeIntervalTypeInput">TypeIntervalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeJsonInput">TypeJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typePrecisionInput">TypePrecisionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeScaleInput">TypeScaleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeTextInput">TypeTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.nullable">Nullable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.partitionIndex">PartitionIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeIntervalType">TypeIntervalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeJson">TypeJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typePrecision">TypePrecision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeScale">TypeScale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeText">TypeText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns">DataDatabricksCleanRoomAssetTableColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mask`<sup>Required</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.mask"></a>

```go
func Mask() DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `MaskInput`<sup>Optional</sup> <a name="MaskInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.maskInput"></a>

```go
func MaskInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NullableInput`<sup>Optional</sup> <a name="NullableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.nullableInput"></a>

```go
func NullableInput() interface{}
```

- *Type:* interface{}

---

##### `PartitionIndexInput`<sup>Optional</sup> <a name="PartitionIndexInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.partitionIndexInput"></a>

```go
func PartitionIndexInput() *f64
```

- *Type:* *f64

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.positionInput"></a>

```go
func PositionInput() *f64
```

- *Type:* *f64

---

##### `TypeIntervalTypeInput`<sup>Optional</sup> <a name="TypeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```go
func TypeIntervalTypeInput() *string
```

- *Type:* *string

---

##### `TypeJsonInput`<sup>Optional</sup> <a name="TypeJsonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeJsonInput"></a>

```go
func TypeJsonInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `TypePrecisionInput`<sup>Optional</sup> <a name="TypePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typePrecisionInput"></a>

```go
func TypePrecisionInput() *f64
```

- *Type:* *f64

---

##### `TypeScaleInput`<sup>Optional</sup> <a name="TypeScaleInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeScaleInput"></a>

```go
func TypeScaleInput() *f64
```

- *Type:* *f64

---

##### `TypeTextInput`<sup>Optional</sup> <a name="TypeTextInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeTextInput"></a>

```go
func TypeTextInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Nullable`<sup>Required</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.nullable"></a>

```go
func Nullable() interface{}
```

- *Type:* interface{}

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.partitionIndex"></a>

```go
func PartitionIndex() *f64
```

- *Type:* *f64

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `TypeIntervalType`<sup>Required</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeIntervalType"></a>

```go
func TypeIntervalType() *string
```

- *Type:* *string

---

##### `TypeJson`<sup>Required</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeJson"></a>

```go
func TypeJson() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `TypePrecision`<sup>Required</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typePrecision"></a>

```go
func TypePrecision() *f64
```

- *Type:* *f64

---

##### `TypeScale`<sup>Required</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeScale"></a>

```go
func TypeScale() *f64
```

- *Type:* *f64

---

##### `TypeText`<sup>Required</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeText"></a>

```go
func TypeText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksCleanRoomAssetTableColumns
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns">DataDatabricksCleanRoomAssetTableColumns</a>

---


### DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetTableLocalDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.putPartitions">PutPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.resetPartitions">ResetPartitions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPartitions` <a name="PutPartitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.putPartitions"></a>

```go
func PutPartitions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.putPartitions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPartitions` <a name="ResetPartitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.resetPartitions"></a>

```go
func ResetPartitions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.partitions">Partitions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.localNameInput">LocalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.partitionsInput">PartitionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.localName">LocalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Partitions`<sup>Required</sup> <a name="Partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.partitions"></a>

```go
func Partitions() DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList</a>

---

##### `LocalNameInput`<sup>Optional</sup> <a name="LocalNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.localNameInput"></a>

```go
func LocalNameInput() *string
```

- *Type:* *string

---

##### `PartitionsInput`<sup>Optional</sup> <a name="PartitionsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.partitionsInput"></a>

```go
func PartitionsInput() interface{}
```

- *Type:* interface{}

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.localName"></a>

```go
func LocalName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList <a name="DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.get"></a>

```go
func Get(index *f64) DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference <a name="DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue"></a>

```go
func PutValue(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.value"></a>

```go
func Value() DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList <a name="DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.get"></a>

```go
func Get(index *f64) DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference <a name="DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetOp">ResetOp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey">ResetRecipientPropertyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOp` <a name="ResetOp" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetOp"></a>

```go
func ResetOp()
```

##### `ResetRecipientPropertyKey` <a name="ResetRecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey"></a>

```go
func ResetRecipientPropertyKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.opInput">OpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput">RecipientPropertyKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.op">Op</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey">RecipientPropertyKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OpInput`<sup>Optional</sup> <a name="OpInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.opInput"></a>

```go
func OpInput() *string
```

- *Type:* *string

---

##### `RecipientPropertyKeyInput`<sup>Optional</sup> <a name="RecipientPropertyKeyInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput"></a>

```go
func RecipientPropertyKeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.op"></a>

```go
func Op() *string
```

- *Type:* *string

---

##### `RecipientPropertyKey`<sup>Required</sup> <a name="RecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey"></a>

```go
func RecipientPropertyKey() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomAssetTableOutputReference <a name="DataDatabricksCleanRoomAssetTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomAssetTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList">DataDatabricksCleanRoomAssetTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.columns"></a>

```go
func Columns() DataDatabricksCleanRoomAssetTableColumnsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList">DataDatabricksCleanRoomAssetTableColumnsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomAssetViewColumnsList <a name="DataDatabricksCleanRoomAssetViewColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetViewColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksCleanRoomAssetViewColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.get"></a>

```go
func Get(index *f64) DataDatabricksCleanRoomAssetViewColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetViewColumnsMaskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resetFunctionName">ResetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resetUsingColumnNames">ResetUsingColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctionName` <a name="ResetFunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resetFunctionName"></a>

```go
func ResetFunctionName()
```

##### `ResetUsingColumnNames` <a name="ResetUsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resetUsingColumnNames"></a>

```go
func ResetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNamesInput">UsingColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNames">UsingColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `UsingColumnNamesInput`<sup>Optional</sup> <a name="UsingColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```go
func UsingColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `UsingColumnNames`<sup>Required</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNames"></a>

```go
func UsingColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomAssetViewColumnsOutputReference <a name="DataDatabricksCleanRoomAssetViewColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetViewColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksCleanRoomAssetViewColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.putMask">PutMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetMask">ResetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetNullable">ResetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetPartitionIndex">ResetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeIntervalType">ResetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeJson">ResetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypePrecision">ResetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeScale">ResetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeText">ResetTypeText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMask` <a name="PutMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.putMask"></a>

```go
func PutMask(value DataDatabricksCleanRoomAssetViewColumnsMask)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetViewColumnsMask</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetMask` <a name="ResetMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetMask"></a>

```go
func ResetMask()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNullable` <a name="ResetNullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetNullable"></a>

```go
func ResetNullable()
```

##### `ResetPartitionIndex` <a name="ResetPartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetPartitionIndex"></a>

```go
func ResetPartitionIndex()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetPosition"></a>

```go
func ResetPosition()
```

##### `ResetTypeIntervalType` <a name="ResetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeIntervalType"></a>

```go
func ResetTypeIntervalType()
```

##### `ResetTypeJson` <a name="ResetTypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeJson"></a>

```go
func ResetTypeJson()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeName"></a>

```go
func ResetTypeName()
```

##### `ResetTypePrecision` <a name="ResetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypePrecision"></a>

```go
func ResetTypePrecision()
```

##### `ResetTypeScale` <a name="ResetTypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeScale"></a>

```go
func ResetTypeScale()
```

##### `ResetTypeText` <a name="ResetTypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeText"></a>

```go
func ResetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference">DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.maskInput">MaskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.nullableInput">NullableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.partitionIndexInput">PartitionIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.positionInput">PositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeIntervalTypeInput">TypeIntervalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeJsonInput">TypeJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typePrecisionInput">TypePrecisionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeScaleInput">TypeScaleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeTextInput">TypeTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.nullable">Nullable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.partitionIndex">PartitionIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeIntervalType">TypeIntervalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeJson">TypeJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typePrecision">TypePrecision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeScale">TypeScale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeText">TypeText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns">DataDatabricksCleanRoomAssetViewColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mask`<sup>Required</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.mask"></a>

```go
func Mask() DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference">DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `MaskInput`<sup>Optional</sup> <a name="MaskInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.maskInput"></a>

```go
func MaskInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NullableInput`<sup>Optional</sup> <a name="NullableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.nullableInput"></a>

```go
func NullableInput() interface{}
```

- *Type:* interface{}

---

##### `PartitionIndexInput`<sup>Optional</sup> <a name="PartitionIndexInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.partitionIndexInput"></a>

```go
func PartitionIndexInput() *f64
```

- *Type:* *f64

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.positionInput"></a>

```go
func PositionInput() *f64
```

- *Type:* *f64

---

##### `TypeIntervalTypeInput`<sup>Optional</sup> <a name="TypeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeIntervalTypeInput"></a>

```go
func TypeIntervalTypeInput() *string
```

- *Type:* *string

---

##### `TypeJsonInput`<sup>Optional</sup> <a name="TypeJsonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeJsonInput"></a>

```go
func TypeJsonInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `TypePrecisionInput`<sup>Optional</sup> <a name="TypePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typePrecisionInput"></a>

```go
func TypePrecisionInput() *f64
```

- *Type:* *f64

---

##### `TypeScaleInput`<sup>Optional</sup> <a name="TypeScaleInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeScaleInput"></a>

```go
func TypeScaleInput() *f64
```

- *Type:* *f64

---

##### `TypeTextInput`<sup>Optional</sup> <a name="TypeTextInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeTextInput"></a>

```go
func TypeTextInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Nullable`<sup>Required</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.nullable"></a>

```go
func Nullable() interface{}
```

- *Type:* interface{}

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.partitionIndex"></a>

```go
func PartitionIndex() *f64
```

- *Type:* *f64

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `TypeIntervalType`<sup>Required</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeIntervalType"></a>

```go
func TypeIntervalType() *string
```

- *Type:* *string

---

##### `TypeJson`<sup>Required</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeJson"></a>

```go
func TypeJson() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `TypePrecision`<sup>Required</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typePrecision"></a>

```go
func TypePrecision() *f64
```

- *Type:* *f64

---

##### `TypeScale`<sup>Required</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeScale"></a>

```go
func TypeScale() *f64
```

- *Type:* *f64

---

##### `TypeText`<sup>Required</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeText"></a>

```go
func TypeText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksCleanRoomAssetViewColumns
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns">DataDatabricksCleanRoomAssetViewColumns</a>

---


### DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetViewLocalDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.localNameInput">LocalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.localName">LocalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalNameInput`<sup>Optional</sup> <a name="LocalNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.localNameInput"></a>

```go
func LocalNameInput() *string
```

- *Type:* *string

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.localName"></a>

```go
func LocalName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomAssetViewOutputReference <a name="DataDatabricksCleanRoomAssetViewOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetViewOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomAssetViewOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList">DataDatabricksCleanRoomAssetViewColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.columns"></a>

```go
func Columns() DataDatabricksCleanRoomAssetViewColumnsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList">DataDatabricksCleanRoomAssetViewColumnsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomasset"

datadatabrickscleanroomasset.NewDataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.localNameInput">LocalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.localName">LocalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalNameInput`<sup>Optional</sup> <a name="LocalNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.localNameInput"></a>

```go
func LocalNameInput() *string
```

- *Type:* *string

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.localName"></a>

```go
func LocalName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



