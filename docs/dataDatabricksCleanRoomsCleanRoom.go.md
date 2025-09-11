# `dataDatabricksCleanRoomsCleanRoom` Submodule <a name="`dataDatabricksCleanRoomsCleanRoom` Submodule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCleanRoomsCleanRoom <a name="DataDatabricksCleanRoomsCleanRoom" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room databricks_clean_rooms_clean_room}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

datadatabrickscleanroomscleanroom.NewDataDatabricksCleanRoomsCleanRoom(scope Construct, id *string, config DataDatabricksCleanRoomsCleanRoomConfig) DataDatabricksCleanRoomsCleanRoom
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig">DataDatabricksCleanRoomsCleanRoomConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig">DataDatabricksCleanRoomsCleanRoomConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.putRemoteDetailedInfo">PutRemoteDetailedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetRemoteDetailedInfo">ResetRemoteDetailedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRemoteDetailedInfo` <a name="PutRemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.putRemoteDetailedInfo"></a>

```go
func PutRemoteDetailedInfo(value DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.putRemoteDetailedInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetComment"></a>

```go
func ResetComment()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetName"></a>

```go
func ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetRemoteDetailedInfo` <a name="ResetRemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetRemoteDetailedInfo"></a>

```go
func ResetRemoteDetailedInfo()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCleanRoomsCleanRoom resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

datadatabrickscleanroomscleanroom.DataDatabricksCleanRoomsCleanRoom_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

datadatabrickscleanroomscleanroom.DataDatabricksCleanRoomsCleanRoom_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

datadatabrickscleanroomscleanroom.DataDatabricksCleanRoomsCleanRoom_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

datadatabrickscleanroomscleanroom.DataDatabricksCleanRoomsCleanRoom_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksCleanRoomsCleanRoom resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksCleanRoomsCleanRoom to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksCleanRoomsCleanRoom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCleanRoomsCleanRoom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.accessRestricted">AccessRestricted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.localCollaboratorAlias">LocalCollaboratorAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.outputCatalog">OutputCatalog</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference">DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.remoteDetailedInfo">RemoteDetailedInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.remoteDetailedInfoInput">RemoteDetailedInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccessRestricted`<sup>Required</sup> <a name="AccessRestricted" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.accessRestricted"></a>

```go
func AccessRestricted() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `LocalCollaboratorAlias`<sup>Required</sup> <a name="LocalCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.localCollaboratorAlias"></a>

```go
func LocalCollaboratorAlias() *string
```

- *Type:* *string

---

##### `OutputCatalog`<sup>Required</sup> <a name="OutputCatalog" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.outputCatalog"></a>

```go
func OutputCatalog() DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference">DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference</a>

---

##### `RemoteDetailedInfo`<sup>Required</sup> <a name="RemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.remoteDetailedInfo"></a>

```go
func RemoteDetailedInfo() DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.updatedAt"></a>

```go
func UpdatedAt() *f64
```

- *Type:* *f64

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `RemoteDetailedInfoInput`<sup>Optional</sup> <a name="RemoteDetailedInfoInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.remoteDetailedInfoInput"></a>

```go
func RemoteDetailedInfoInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCleanRoomsCleanRoomConfig <a name="DataDatabricksCleanRoomsCleanRoomConfig" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

&datadatabrickscleanroomscleanroom.DataDatabricksCleanRoomsCleanRoomConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Comment: *string,
	Name: *string,
	Owner: *string,
	RemoteDetailedInfo: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo,
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#comment DataDatabricksCleanRoomsCleanRoom#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#name DataDatabricksCleanRoomsCleanRoom#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#owner DataDatabricksCleanRoomsCleanRoom#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.remoteDetailedInfo">RemoteDetailedInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#remote_detailed_info DataDatabricksCleanRoomsCleanRoom#remote_detailed_info}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#workspace_id DataDatabricksCleanRoomsCleanRoom#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#comment DataDatabricksCleanRoomsCleanRoom#comment}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#name DataDatabricksCleanRoomsCleanRoom#name}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#owner DataDatabricksCleanRoomsCleanRoom#owner}.

---

##### `RemoteDetailedInfo`<sup>Optional</sup> <a name="RemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.remoteDetailedInfo"></a>

```go
RemoteDetailedInfo DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#remote_detailed_info DataDatabricksCleanRoomsCleanRoom#remote_detailed_info}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#workspace_id DataDatabricksCleanRoomsCleanRoom#workspace_id}.

---

### DataDatabricksCleanRoomsCleanRoomOutputCatalog <a name="DataDatabricksCleanRoomsCleanRoomOutputCatalog" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

&datadatabrickscleanroomscleanroom.DataDatabricksCleanRoomsCleanRoomOutputCatalog {
	CatalogName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#catalog_name DataDatabricksCleanRoomsCleanRoom#catalog_name}. |

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#catalog_name DataDatabricksCleanRoomsCleanRoom#catalog_name}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

&datadatabrickscleanroomscleanroom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo {
	CloudVendor: *string,
	Collaborators: interface{},
	EgressNetworkPolicy: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.cloudVendor">CloudVendor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#cloud_vendor DataDatabricksCleanRoomsCleanRoom#cloud_vendor}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.collaborators">Collaborators</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#collaborators DataDatabricksCleanRoomsCleanRoom#collaborators}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.egressNetworkPolicy">EgressNetworkPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#egress_network_policy DataDatabricksCleanRoomsCleanRoom#egress_network_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#region DataDatabricksCleanRoomsCleanRoom#region}. |

---

##### `CloudVendor`<sup>Optional</sup> <a name="CloudVendor" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.cloudVendor"></a>

```go
CloudVendor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#cloud_vendor DataDatabricksCleanRoomsCleanRoom#cloud_vendor}.

---

##### `Collaborators`<sup>Optional</sup> <a name="Collaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.collaborators"></a>

```go
Collaborators interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#collaborators DataDatabricksCleanRoomsCleanRoom#collaborators}.

---

##### `EgressNetworkPolicy`<sup>Optional</sup> <a name="EgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.egressNetworkPolicy"></a>

```go
EgressNetworkPolicy DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#egress_network_policy DataDatabricksCleanRoomsCleanRoom#egress_network_policy}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#region DataDatabricksCleanRoomsCleanRoom#region}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

&datadatabrickscleanroomscleanroom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators {
	CollaboratorAlias: *string,
	GlobalMetastoreId: *string,
	InviteRecipientEmail: *string,
	InviteRecipientWorkspaceId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.collaboratorAlias">CollaboratorAlias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#collaborator_alias DataDatabricksCleanRoomsCleanRoom#collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#global_metastore_id DataDatabricksCleanRoomsCleanRoom#global_metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.inviteRecipientEmail">InviteRecipientEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_email DataDatabricksCleanRoomsCleanRoom#invite_recipient_email}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.inviteRecipientWorkspaceId">InviteRecipientWorkspaceId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRoom#invite_recipient_workspace_id}. |

---

##### `CollaboratorAlias`<sup>Required</sup> <a name="CollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.collaboratorAlias"></a>

```go
CollaboratorAlias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#collaborator_alias DataDatabricksCleanRoomsCleanRoom#collaborator_alias}.

---

##### `GlobalMetastoreId`<sup>Optional</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.globalMetastoreId"></a>

```go
GlobalMetastoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#global_metastore_id DataDatabricksCleanRoomsCleanRoom#global_metastore_id}.

---

##### `InviteRecipientEmail`<sup>Optional</sup> <a name="InviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.inviteRecipientEmail"></a>

```go
InviteRecipientEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_email DataDatabricksCleanRoomsCleanRoom#invite_recipient_email}.

---

##### `InviteRecipientWorkspaceId`<sup>Optional</sup> <a name="InviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.inviteRecipientWorkspaceId"></a>

```go
InviteRecipientWorkspaceId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRoom#invite_recipient_workspace_id}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

&datadatabrickscleanroomscleanroom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile {
	ComplianceStandards: *[]*string,
	IsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile.property.complianceStandards">ComplianceStandards</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#compliance_standards DataDatabricksCleanRoomsCleanRoom#compliance_standards}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#is_enabled DataDatabricksCleanRoomsCleanRoom#is_enabled}. |

---

##### `ComplianceStandards`<sup>Optional</sup> <a name="ComplianceStandards" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile.property.complianceStandards"></a>

```go
ComplianceStandards *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#compliance_standards DataDatabricksCleanRoomsCleanRoom#compliance_standards}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#is_enabled DataDatabricksCleanRoomsCleanRoom#is_enabled}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

&datadatabrickscleanroomscleanroom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator {
	CollaboratorAlias: *string,
	GlobalMetastoreId: *string,
	InviteRecipientEmail: *string,
	InviteRecipientWorkspaceId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.collaboratorAlias">CollaboratorAlias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#collaborator_alias DataDatabricksCleanRoomsCleanRoom#collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#global_metastore_id DataDatabricksCleanRoomsCleanRoom#global_metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.inviteRecipientEmail">InviteRecipientEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_email DataDatabricksCleanRoomsCleanRoom#invite_recipient_email}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.inviteRecipientWorkspaceId">InviteRecipientWorkspaceId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRoom#invite_recipient_workspace_id}. |

---

##### `CollaboratorAlias`<sup>Required</sup> <a name="CollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.collaboratorAlias"></a>

```go
CollaboratorAlias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#collaborator_alias DataDatabricksCleanRoomsCleanRoom#collaborator_alias}.

---

##### `GlobalMetastoreId`<sup>Optional</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.globalMetastoreId"></a>

```go
GlobalMetastoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#global_metastore_id DataDatabricksCleanRoomsCleanRoom#global_metastore_id}.

---

##### `InviteRecipientEmail`<sup>Optional</sup> <a name="InviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.inviteRecipientEmail"></a>

```go
InviteRecipientEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_email DataDatabricksCleanRoomsCleanRoom#invite_recipient_email}.

---

##### `InviteRecipientWorkspaceId`<sup>Optional</sup> <a name="InviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.inviteRecipientWorkspaceId"></a>

```go
InviteRecipientWorkspaceId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRoom#invite_recipient_workspace_id}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

&datadatabrickscleanroomscleanroom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy {
	InternetAccess: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy.property.internetAccess">InternetAccess</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#internet_access DataDatabricksCleanRoomsCleanRoom#internet_access}. |

---

##### `InternetAccess`<sup>Optional</sup> <a name="InternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy.property.internetAccess"></a>

```go
InternetAccess DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#internet_access DataDatabricksCleanRoomsCleanRoom#internet_access}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

&datadatabrickscleanroomscleanroom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess {
	AllowedInternetDestinations: interface{},
	AllowedStorageDestinations: interface{},
	LogOnlyMode: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode,
	RestrictionMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedInternetDestinations">AllowedInternetDestinations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#allowed_internet_destinations DataDatabricksCleanRoomsCleanRoom#allowed_internet_destinations}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedStorageDestinations">AllowedStorageDestinations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#allowed_storage_destinations DataDatabricksCleanRoomsCleanRoom#allowed_storage_destinations}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.logOnlyMode">LogOnlyMode</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#log_only_mode DataDatabricksCleanRoomsCleanRoom#log_only_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.restrictionMode">RestrictionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#restriction_mode DataDatabricksCleanRoomsCleanRoom#restriction_mode}. |

---

##### `AllowedInternetDestinations`<sup>Optional</sup> <a name="AllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedInternetDestinations"></a>

```go
AllowedInternetDestinations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#allowed_internet_destinations DataDatabricksCleanRoomsCleanRoom#allowed_internet_destinations}.

---

##### `AllowedStorageDestinations`<sup>Optional</sup> <a name="AllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedStorageDestinations"></a>

```go
AllowedStorageDestinations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#allowed_storage_destinations DataDatabricksCleanRoomsCleanRoom#allowed_storage_destinations}.

---

##### `LogOnlyMode`<sup>Optional</sup> <a name="LogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.logOnlyMode"></a>

```go
LogOnlyMode DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#log_only_mode DataDatabricksCleanRoomsCleanRoom#log_only_mode}.

---

##### `RestrictionMode`<sup>Optional</sup> <a name="RestrictionMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.restrictionMode"></a>

```go
RestrictionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#restriction_mode DataDatabricksCleanRoomsCleanRoom#restriction_mode}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

&datadatabrickscleanroomscleanroom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations {
	Destination: *string,
	Protocol: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#destination DataDatabricksCleanRoomsCleanRoom#destination}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#protocol DataDatabricksCleanRoomsCleanRoom#protocol}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#type DataDatabricksCleanRoomsCleanRoom#type}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#destination DataDatabricksCleanRoomsCleanRoom#destination}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#protocol DataDatabricksCleanRoomsCleanRoom#protocol}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#type DataDatabricksCleanRoomsCleanRoom#type}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

&datadatabrickscleanroomscleanroom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations {
	AllowedPaths: *[]*string,
	AzureContainer: *string,
	AzureDnsZone: *string,
	AzureStorageAccount: *string,
	AzureStorageService: *string,
	BucketName: *string,
	Region: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.allowedPaths">AllowedPaths</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#allowed_paths DataDatabricksCleanRoomsCleanRoom#allowed_paths}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureContainer">AzureContainer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_container DataDatabricksCleanRoomsCleanRoom#azure_container}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureDnsZone">AzureDnsZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_dns_zone DataDatabricksCleanRoomsCleanRoom#azure_dns_zone}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageAccount">AzureStorageAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_storage_account DataDatabricksCleanRoomsCleanRoom#azure_storage_account}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageService">AzureStorageService</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_storage_service DataDatabricksCleanRoomsCleanRoom#azure_storage_service}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#bucket_name DataDatabricksCleanRoomsCleanRoom#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#region DataDatabricksCleanRoomsCleanRoom#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#type DataDatabricksCleanRoomsCleanRoom#type}. |

---

##### `AllowedPaths`<sup>Optional</sup> <a name="AllowedPaths" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.allowedPaths"></a>

```go
AllowedPaths *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#allowed_paths DataDatabricksCleanRoomsCleanRoom#allowed_paths}.

---

##### `AzureContainer`<sup>Optional</sup> <a name="AzureContainer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureContainer"></a>

```go
AzureContainer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_container DataDatabricksCleanRoomsCleanRoom#azure_container}.

---

##### `AzureDnsZone`<sup>Optional</sup> <a name="AzureDnsZone" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureDnsZone"></a>

```go
AzureDnsZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_dns_zone DataDatabricksCleanRoomsCleanRoom#azure_dns_zone}.

---

##### `AzureStorageAccount`<sup>Optional</sup> <a name="AzureStorageAccount" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageAccount"></a>

```go
AzureStorageAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_storage_account DataDatabricksCleanRoomsCleanRoom#azure_storage_account}.

---

##### `AzureStorageService`<sup>Optional</sup> <a name="AzureStorageService" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageService"></a>

```go
AzureStorageService *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_storage_service DataDatabricksCleanRoomsCleanRoom#azure_storage_service}.

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#bucket_name DataDatabricksCleanRoomsCleanRoom#bucket_name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#region DataDatabricksCleanRoomsCleanRoom#region}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#type DataDatabricksCleanRoomsCleanRoom#type}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

&datadatabrickscleanroomscleanroom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode {
	LogOnlyModeType: *string,
	Workloads: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.logOnlyModeType">LogOnlyModeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#log_only_mode_type DataDatabricksCleanRoomsCleanRoom#log_only_mode_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.workloads">Workloads</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#workloads DataDatabricksCleanRoomsCleanRoom#workloads}. |

---

##### `LogOnlyModeType`<sup>Optional</sup> <a name="LogOnlyModeType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.logOnlyModeType"></a>

```go
LogOnlyModeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#log_only_mode_type DataDatabricksCleanRoomsCleanRoom#log_only_mode_type}.

---

##### `Workloads`<sup>Optional</sup> <a name="Workloads" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.workloads"></a>

```go
Workloads *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#workloads DataDatabricksCleanRoomsCleanRoom#workloads}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference <a name="DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

datadatabrickscleanroomscleanroom.NewDataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog">DataDatabricksCleanRoomsCleanRoomOutputCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksCleanRoomsCleanRoomOutputCatalog
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog">DataDatabricksCleanRoomsCleanRoomOutputCatalog</a>

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

datadatabrickscleanroomscleanroom.NewDataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.get"></a>

```go
func Get(index *f64) DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

datadatabrickscleanroomscleanroom.NewDataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resetGlobalMetastoreId">ResetGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientEmail">ResetInviteRecipientEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientWorkspaceId">ResetInviteRecipientWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGlobalMetastoreId` <a name="ResetGlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resetGlobalMetastoreId"></a>

```go
func ResetGlobalMetastoreId()
```

##### `ResetInviteRecipientEmail` <a name="ResetInviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientEmail"></a>

```go
func ResetInviteRecipientEmail()
```

##### `ResetInviteRecipientWorkspaceId` <a name="ResetInviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientWorkspaceId"></a>

```go
func ResetInviteRecipientWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAliasInput">CollaboratorAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreIdInput">GlobalMetastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmailInput">InviteRecipientEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceIdInput">InviteRecipientWorkspaceIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAlias">CollaboratorAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmail">InviteRecipientEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceId">InviteRecipientWorkspaceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `CollaboratorAliasInput`<sup>Optional</sup> <a name="CollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAliasInput"></a>

```go
func CollaboratorAliasInput() *string
```

- *Type:* *string

---

##### `GlobalMetastoreIdInput`<sup>Optional</sup> <a name="GlobalMetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreIdInput"></a>

```go
func GlobalMetastoreIdInput() *string
```

- *Type:* *string

---

##### `InviteRecipientEmailInput`<sup>Optional</sup> <a name="InviteRecipientEmailInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmailInput"></a>

```go
func InviteRecipientEmailInput() *string
```

- *Type:* *string

---

##### `InviteRecipientWorkspaceIdInput`<sup>Optional</sup> <a name="InviteRecipientWorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceIdInput"></a>

```go
func InviteRecipientWorkspaceIdInput() *f64
```

- *Type:* *f64

---

##### `CollaboratorAlias`<sup>Required</sup> <a name="CollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAlias"></a>

```go
func CollaboratorAlias() *string
```

- *Type:* *string

---

##### `GlobalMetastoreId`<sup>Required</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreId"></a>

```go
func GlobalMetastoreId() *string
```

- *Type:* *string

---

##### `InviteRecipientEmail`<sup>Required</sup> <a name="InviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmail"></a>

```go
func InviteRecipientEmail() *string
```

- *Type:* *string

---

##### `InviteRecipientWorkspaceId`<sup>Required</sup> <a name="InviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceId"></a>

```go
func InviteRecipientWorkspaceId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

datadatabrickscleanroomscleanroom.NewDataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetComplianceStandards">ResetComplianceStandards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComplianceStandards` <a name="ResetComplianceStandards" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetComplianceStandards"></a>

```go
func ResetComplianceStandards()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandardsInput">ComplianceStandardsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandards">ComplianceStandards</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComplianceStandardsInput`<sup>Optional</sup> <a name="ComplianceStandardsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandardsInput"></a>

```go
func ComplianceStandardsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ComplianceStandards`<sup>Required</sup> <a name="ComplianceStandards" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandards"></a>

```go
func ComplianceStandards() *[]*string
```

- *Type:* *[]*string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile</a>

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

datadatabrickscleanroomscleanroom.NewDataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resetGlobalMetastoreId">ResetGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientEmail">ResetInviteRecipientEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientWorkspaceId">ResetInviteRecipientWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGlobalMetastoreId` <a name="ResetGlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resetGlobalMetastoreId"></a>

```go
func ResetGlobalMetastoreId()
```

##### `ResetInviteRecipientEmail` <a name="ResetInviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientEmail"></a>

```go
func ResetInviteRecipientEmail()
```

##### `ResetInviteRecipientWorkspaceId` <a name="ResetInviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientWorkspaceId"></a>

```go
func ResetInviteRecipientWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.collaboratorAliasInput">CollaboratorAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreIdInput">GlobalMetastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmailInput">InviteRecipientEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceIdInput">InviteRecipientWorkspaceIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.collaboratorAlias">CollaboratorAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmail">InviteRecipientEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceId">InviteRecipientWorkspaceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `CollaboratorAliasInput`<sup>Optional</sup> <a name="CollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.collaboratorAliasInput"></a>

```go
func CollaboratorAliasInput() *string
```

- *Type:* *string

---

##### `GlobalMetastoreIdInput`<sup>Optional</sup> <a name="GlobalMetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreIdInput"></a>

```go
func GlobalMetastoreIdInput() *string
```

- *Type:* *string

---

##### `InviteRecipientEmailInput`<sup>Optional</sup> <a name="InviteRecipientEmailInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmailInput"></a>

```go
func InviteRecipientEmailInput() *string
```

- *Type:* *string

---

##### `InviteRecipientWorkspaceIdInput`<sup>Optional</sup> <a name="InviteRecipientWorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceIdInput"></a>

```go
func InviteRecipientWorkspaceIdInput() *f64
```

- *Type:* *f64

---

##### `CollaboratorAlias`<sup>Required</sup> <a name="CollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.collaboratorAlias"></a>

```go
func CollaboratorAlias() *string
```

- *Type:* *string

---

##### `GlobalMetastoreId`<sup>Required</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreId"></a>

```go
func GlobalMetastoreId() *string
```

- *Type:* *string

---

##### `InviteRecipientEmail`<sup>Required</sup> <a name="InviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmail"></a>

```go
func InviteRecipientEmail() *string
```

- *Type:* *string

---

##### `InviteRecipientWorkspaceId`<sup>Required</sup> <a name="InviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceId"></a>

```go
func InviteRecipientWorkspaceId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator</a>

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

datadatabrickscleanroomscleanroom.NewDataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.get"></a>

```go
func Get(index *f64) DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

datadatabrickscleanroomscleanroom.NewDataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

datadatabrickscleanroomscleanroom.NewDataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.get"></a>

```go
func Get(index *f64) DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

datadatabrickscleanroomscleanroom.NewDataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAllowedPaths">ResetAllowedPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureContainer">ResetAzureContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureDnsZone">ResetAzureDnsZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount">ResetAzureStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService">ResetAzureStorageService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedPaths` <a name="ResetAllowedPaths" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAllowedPaths"></a>

```go
func ResetAllowedPaths()
```

##### `ResetAzureContainer` <a name="ResetAzureContainer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureContainer"></a>

```go
func ResetAzureContainer()
```

##### `ResetAzureDnsZone` <a name="ResetAzureDnsZone" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureDnsZone"></a>

```go
func ResetAzureDnsZone()
```

##### `ResetAzureStorageAccount` <a name="ResetAzureStorageAccount" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount"></a>

```go
func ResetAzureStorageAccount()
```

##### `ResetAzureStorageService` <a name="ResetAzureStorageService" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService"></a>

```go
func ResetAzureStorageService()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPathsInput">AllowedPathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainerInput">AzureContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZoneInput">AzureDnsZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput">AzureStorageAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput">AzureStorageServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPaths">AllowedPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainer">AzureContainer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZone">AzureDnsZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount">AzureStorageAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageService">AzureStorageService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedPathsInput`<sup>Optional</sup> <a name="AllowedPathsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPathsInput"></a>

```go
func AllowedPathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AzureContainerInput`<sup>Optional</sup> <a name="AzureContainerInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainerInput"></a>

```go
func AzureContainerInput() *string
```

- *Type:* *string

---

##### `AzureDnsZoneInput`<sup>Optional</sup> <a name="AzureDnsZoneInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZoneInput"></a>

```go
func AzureDnsZoneInput() *string
```

- *Type:* *string

---

##### `AzureStorageAccountInput`<sup>Optional</sup> <a name="AzureStorageAccountInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput"></a>

```go
func AzureStorageAccountInput() *string
```

- *Type:* *string

---

##### `AzureStorageServiceInput`<sup>Optional</sup> <a name="AzureStorageServiceInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput"></a>

```go
func AzureStorageServiceInput() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AllowedPaths`<sup>Required</sup> <a name="AllowedPaths" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPaths"></a>

```go
func AllowedPaths() *[]*string
```

- *Type:* *[]*string

---

##### `AzureContainer`<sup>Required</sup> <a name="AzureContainer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainer"></a>

```go
func AzureContainer() *string
```

- *Type:* *string

---

##### `AzureDnsZone`<sup>Required</sup> <a name="AzureDnsZone" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZone"></a>

```go
func AzureDnsZone() *string
```

- *Type:* *string

---

##### `AzureStorageAccount`<sup>Required</sup> <a name="AzureStorageAccount" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount"></a>

```go
func AzureStorageAccount() *string
```

- *Type:* *string

---

##### `AzureStorageService`<sup>Required</sup> <a name="AzureStorageService" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageService"></a>

```go
func AzureStorageService() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

datadatabrickscleanroomscleanroom.NewDataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetLogOnlyModeType">ResetLogOnlyModeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetWorkloads">ResetWorkloads</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogOnlyModeType` <a name="ResetLogOnlyModeType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetLogOnlyModeType"></a>

```go
func ResetLogOnlyModeType()
```

##### `ResetWorkloads` <a name="ResetWorkloads" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetWorkloads"></a>

```go
func ResetWorkloads()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeTypeInput">LogOnlyModeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloadsInput">WorkloadsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeType">LogOnlyModeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloads">Workloads</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogOnlyModeTypeInput`<sup>Optional</sup> <a name="LogOnlyModeTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeTypeInput"></a>

```go
func LogOnlyModeTypeInput() *string
```

- *Type:* *string

---

##### `WorkloadsInput`<sup>Optional</sup> <a name="WorkloadsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloadsInput"></a>

```go
func WorkloadsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LogOnlyModeType`<sup>Required</sup> <a name="LogOnlyModeType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeType"></a>

```go
func LogOnlyModeType() *string
```

- *Type:* *string

---

##### `Workloads`<sup>Required</sup> <a name="Workloads" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloads"></a>

```go
func Workloads() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

datadatabrickscleanroomscleanroom.NewDataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedInternetDestinations">PutAllowedInternetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedStorageDestinations">PutAllowedStorageDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putLogOnlyMode">PutLogOnlyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedInternetDestinations">ResetAllowedInternetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedStorageDestinations">ResetAllowedStorageDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetLogOnlyMode">ResetLogOnlyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetRestrictionMode">ResetRestrictionMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedInternetDestinations` <a name="PutAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedInternetDestinations"></a>

```go
func PutAllowedInternetDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedInternetDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAllowedStorageDestinations` <a name="PutAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedStorageDestinations"></a>

```go
func PutAllowedStorageDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedStorageDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogOnlyMode` <a name="PutLogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putLogOnlyMode"></a>

```go
func PutLogOnlyMode(value DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putLogOnlyMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a>

---

##### `ResetAllowedInternetDestinations` <a name="ResetAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedInternetDestinations"></a>

```go
func ResetAllowedInternetDestinations()
```

##### `ResetAllowedStorageDestinations` <a name="ResetAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedStorageDestinations"></a>

```go
func ResetAllowedStorageDestinations()
```

##### `ResetLogOnlyMode` <a name="ResetLogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetLogOnlyMode"></a>

```go
func ResetLogOnlyMode()
```

##### `ResetRestrictionMode` <a name="ResetRestrictionMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetRestrictionMode"></a>

```go
func ResetRestrictionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinations">AllowedInternetDestinations</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinations">AllowedStorageDestinations</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyMode">LogOnlyMode</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinationsInput">AllowedInternetDestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinationsInput">AllowedStorageDestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyModeInput">LogOnlyModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionModeInput">RestrictionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionMode">RestrictionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedInternetDestinations`<sup>Required</sup> <a name="AllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinations"></a>

```go
func AllowedInternetDestinations() DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList</a>

---

##### `AllowedStorageDestinations`<sup>Required</sup> <a name="AllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinations"></a>

```go
func AllowedStorageDestinations() DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList</a>

---

##### `LogOnlyMode`<sup>Required</sup> <a name="LogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyMode"></a>

```go
func LogOnlyMode() DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference</a>

---

##### `AllowedInternetDestinationsInput`<sup>Optional</sup> <a name="AllowedInternetDestinationsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinationsInput"></a>

```go
func AllowedInternetDestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedStorageDestinationsInput`<sup>Optional</sup> <a name="AllowedStorageDestinationsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinationsInput"></a>

```go
func AllowedStorageDestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `LogOnlyModeInput`<sup>Optional</sup> <a name="LogOnlyModeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyModeInput"></a>

```go
func LogOnlyModeInput() interface{}
```

- *Type:* interface{}

---

##### `RestrictionModeInput`<sup>Optional</sup> <a name="RestrictionModeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionModeInput"></a>

```go
func RestrictionModeInput() *string
```

- *Type:* *string

---

##### `RestrictionMode`<sup>Required</sup> <a name="RestrictionMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionMode"></a>

```go
func RestrictionMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

datadatabrickscleanroomscleanroom.NewDataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.putInternetAccess">PutInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.resetInternetAccess">ResetInternetAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternetAccess` <a name="PutInternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.putInternetAccess"></a>

```go
func PutInternetAccess(value DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.putInternetAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a>

---

##### `ResetInternetAccess` <a name="ResetInternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.resetInternetAccess"></a>

```go
func ResetInternetAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccess">InternetAccess</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccessInput">InternetAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternetAccess`<sup>Required</sup> <a name="InternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccess"></a>

```go
func InternetAccess() DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference</a>

---

##### `InternetAccessInput`<sup>Optional</sup> <a name="InternetAccessInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccessInput"></a>

```go
func InternetAccessInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanroom"

datadatabrickscleanroomscleanroom.NewDataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.putCollaborators">PutCollaborators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.putEgressNetworkPolicy">PutEgressNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetCloudVendor">ResetCloudVendor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetCollaborators">ResetCollaborators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetEgressNetworkPolicy">ResetEgressNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCollaborators` <a name="PutCollaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.putCollaborators"></a>

```go
func PutCollaborators(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.putCollaborators.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEgressNetworkPolicy` <a name="PutEgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.putEgressNetworkPolicy"></a>

```go
func PutEgressNetworkPolicy(value DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.putEgressNetworkPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy</a>

---

##### `ResetCloudVendor` <a name="ResetCloudVendor" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetCloudVendor"></a>

```go
func ResetCloudVendor()
```

##### `ResetCollaborators` <a name="ResetCollaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetCollaborators"></a>

```go
func ResetCollaborators()
```

##### `ResetEgressNetworkPolicy` <a name="ResetEgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetEgressNetworkPolicy"></a>

```go
func ResetEgressNetworkPolicy()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.centralCleanRoomId">CentralCleanRoomId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.collaborators">Collaborators</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.complianceSecurityProfile">ComplianceSecurityProfile</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.creator">Creator</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.egressNetworkPolicy">EgressNetworkPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.cloudVendorInput">CloudVendorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.collaboratorsInput">CollaboratorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.egressNetworkPolicyInput">EgressNetworkPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.cloudVendor">CloudVendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CentralCleanRoomId`<sup>Required</sup> <a name="CentralCleanRoomId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.centralCleanRoomId"></a>

```go
func CentralCleanRoomId() *string
```

- *Type:* *string

---

##### `Collaborators`<sup>Required</sup> <a name="Collaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.collaborators"></a>

```go
func Collaborators() DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList</a>

---

##### `ComplianceSecurityProfile`<sup>Required</sup> <a name="ComplianceSecurityProfile" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.complianceSecurityProfile"></a>

```go
func ComplianceSecurityProfile() DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference</a>

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.creator"></a>

```go
func Creator() DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference</a>

---

##### `EgressNetworkPolicy`<sup>Required</sup> <a name="EgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.egressNetworkPolicy"></a>

```go
func EgressNetworkPolicy() DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference</a>

---

##### `CloudVendorInput`<sup>Optional</sup> <a name="CloudVendorInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.cloudVendorInput"></a>

```go
func CloudVendorInput() *string
```

- *Type:* *string

---

##### `CollaboratorsInput`<sup>Optional</sup> <a name="CollaboratorsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.collaboratorsInput"></a>

```go
func CollaboratorsInput() interface{}
```

- *Type:* interface{}

---

##### `EgressNetworkPolicyInput`<sup>Optional</sup> <a name="EgressNetworkPolicyInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.egressNetworkPolicyInput"></a>

```go
func EgressNetworkPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `CloudVendor`<sup>Required</sup> <a name="CloudVendor" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.cloudVendor"></a>

```go
func CloudVendor() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



