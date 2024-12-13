# `dataDatabricksVolume` Submodule <a name="`dataDatabricksVolume` Submodule" id="@cdktf/provider-databricks.dataDatabricksVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksVolume <a name="DataDatabricksVolume" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume databricks_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksvolume"

datadatabricksvolume.NewDataDatabricksVolume(scope Construct, id *string, config DataDatabricksVolumeConfig) DataDatabricksVolume
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig">DataDatabricksVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig">DataDatabricksVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo">PutVolumeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.resetVolumeInfo">ResetVolumeInfo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutVolumeInfo` <a name="PutVolumeInfo" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo"></a>

```go
func PutVolumeInfo(value DataDatabricksVolumeVolumeInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.putVolumeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo">DataDatabricksVolumeVolumeInfo</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.resetId"></a>

```go
func ResetId()
```

##### `ResetVolumeInfo` <a name="ResetVolumeInfo" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.resetVolumeInfo"></a>

```go
func ResetVolumeInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksVolume resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksvolume"

datadatabricksvolume.DataDatabricksVolume_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksvolume"

datadatabricksvolume.DataDatabricksVolume_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksvolume"

datadatabricksvolume.DataDatabricksVolume_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksvolume"

datadatabricksvolume.DataDatabricksVolume_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.volumeInfo">VolumeInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference">DataDatabricksVolumeVolumeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.volumeInfoInput">VolumeInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo">DataDatabricksVolumeVolumeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `VolumeInfo`<sup>Required</sup> <a name="VolumeInfo" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.volumeInfo"></a>

```go
func VolumeInfo() DataDatabricksVolumeVolumeInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference">DataDatabricksVolumeVolumeInfoOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VolumeInfoInput`<sup>Optional</sup> <a name="VolumeInfoInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.volumeInfoInput"></a>

```go
func VolumeInfoInput() DataDatabricksVolumeVolumeInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo">DataDatabricksVolumeVolumeInfo</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolume.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksVolumeConfig <a name="DataDatabricksVolumeConfig" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksvolume"

&datadatabricksvolume.DataDatabricksVolumeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	VolumeInfo: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#name DataDatabricksVolume#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#id DataDatabricksVolume#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.volumeInfo">VolumeInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo">DataDatabricksVolumeVolumeInfo</a></code> | volume_info block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#name DataDatabricksVolume#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#id DataDatabricksVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `VolumeInfo`<sup>Optional</sup> <a name="VolumeInfo" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeConfig.property.volumeInfo"></a>

```go
VolumeInfo DataDatabricksVolumeVolumeInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo">DataDatabricksVolumeVolumeInfo</a>

volume_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#volume_info DataDatabricksVolume#volume_info}

---

### DataDatabricksVolumeVolumeInfo <a name="DataDatabricksVolumeVolumeInfo" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksvolume"

&datadatabricksvolume.DataDatabricksVolumeVolumeInfo {
	AccessPoint: *string,
	BrowseOnly: interface{},
	CatalogName: *string,
	Comment: *string,
	CreatedAt: *f64,
	CreatedBy: *string,
	EncryptionDetails: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails,
	FullName: *string,
	MetastoreId: *string,
	Name: *string,
	Owner: *string,
	SchemaName: *string,
	StorageLocation: *string,
	UpdatedAt: *f64,
	UpdatedBy: *string,
	VolumeId: *string,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.accessPoint">AccessPoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#access_point DataDatabricksVolume#access_point}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.browseOnly">BrowseOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#browse_only DataDatabricksVolume#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#catalog_name DataDatabricksVolume#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#comment DataDatabricksVolume#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#created_at DataDatabricksVolume#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.createdBy">CreatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#created_by DataDatabricksVolume#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.encryptionDetails">EncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetails</a></code> | encryption_details block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.fullName">FullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#full_name DataDatabricksVolume#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#metastore_id DataDatabricksVolume#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#name DataDatabricksVolume#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#owner DataDatabricksVolume#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#schema_name DataDatabricksVolume#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.storageLocation">StorageLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#storage_location DataDatabricksVolume#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#updated_at DataDatabricksVolume#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#updated_by DataDatabricksVolume#updated_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.volumeId">VolumeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#volume_id DataDatabricksVolume#volume_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#volume_type DataDatabricksVolume#volume_type}. |

---

##### `AccessPoint`<sup>Optional</sup> <a name="AccessPoint" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.accessPoint"></a>

```go
AccessPoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#access_point DataDatabricksVolume#access_point}.

---

##### `BrowseOnly`<sup>Optional</sup> <a name="BrowseOnly" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.browseOnly"></a>

```go
BrowseOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#browse_only DataDatabricksVolume#browse_only}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#catalog_name DataDatabricksVolume#catalog_name}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#comment DataDatabricksVolume#comment}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.createdAt"></a>

```go
CreatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#created_at DataDatabricksVolume#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.createdBy"></a>

```go
CreatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#created_by DataDatabricksVolume#created_by}.

---

##### `EncryptionDetails`<sup>Optional</sup> <a name="EncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.encryptionDetails"></a>

```go
EncryptionDetails DataDatabricksVolumeVolumeInfoEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetails</a>

encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#encryption_details DataDatabricksVolume#encryption_details}

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.fullName"></a>

```go
FullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#full_name DataDatabricksVolume#full_name}.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.metastoreId"></a>

```go
MetastoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#metastore_id DataDatabricksVolume#metastore_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#name DataDatabricksVolume#name}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#owner DataDatabricksVolume#owner}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#schema_name DataDatabricksVolume#schema_name}.

---

##### `StorageLocation`<sup>Optional</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.storageLocation"></a>

```go
StorageLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#storage_location DataDatabricksVolume#storage_location}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.updatedAt"></a>

```go
UpdatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#updated_at DataDatabricksVolume#updated_at}.

---

##### `UpdatedBy`<sup>Optional</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.updatedBy"></a>

```go
UpdatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#updated_by DataDatabricksVolume#updated_by}.

---

##### `VolumeId`<sup>Optional</sup> <a name="VolumeId" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.volumeId"></a>

```go
VolumeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#volume_id DataDatabricksVolume#volume_id}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#volume_type DataDatabricksVolume#volume_type}.

---

### DataDatabricksVolumeVolumeInfoEncryptionDetails <a name="DataDatabricksVolumeVolumeInfoEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksvolume"

&datadatabricksvolume.DataDatabricksVolumeVolumeInfoEncryptionDetails {
	SseEncryptionDetails: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails.property.sseEncryptionDetails">SseEncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails</a></code> | sse_encryption_details block. |

---

##### `SseEncryptionDetails`<sup>Optional</sup> <a name="SseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails.property.sseEncryptionDetails"></a>

```go
SseEncryptionDetails DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails</a>

sse_encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#sse_encryption_details DataDatabricksVolume#sse_encryption_details}

---

### DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails <a name="DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksvolume"

&datadatabricksvolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails {
	Algorithm: *string,
	AwsKmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails.property.algorithm">Algorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#algorithm DataDatabricksVolume#algorithm}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn">AwsKmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#aws_kms_key_arn DataDatabricksVolume#aws_kms_key_arn}. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#algorithm DataDatabricksVolume#algorithm}.

---

##### `AwsKmsKeyArn`<sup>Optional</sup> <a name="AwsKmsKeyArn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn"></a>

```go
AwsKmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.61.0/docs/data-sources/volume#aws_kms_key_arn DataDatabricksVolume#aws_kms_key_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference <a name="DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksvolume"

datadatabricksvolume.NewDataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.putSseEncryptionDetails">PutSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.resetSseEncryptionDetails">ResetSseEncryptionDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSseEncryptionDetails` <a name="PutSseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.putSseEncryptionDetails"></a>

```go
func PutSseEncryptionDetails(value DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.putSseEncryptionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails</a>

---

##### `ResetSseEncryptionDetails` <a name="ResetSseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.resetSseEncryptionDetails"></a>

```go
func ResetSseEncryptionDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.sseEncryptionDetails">SseEncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference">DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput">SseEncryptionDetailsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SseEncryptionDetails`<sup>Required</sup> <a name="SseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.sseEncryptionDetails"></a>

```go
func SseEncryptionDetails() DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference">DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference</a>

---

##### `SseEncryptionDetailsInput`<sup>Optional</sup> <a name="SseEncryptionDetailsInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput"></a>

```go
func SseEncryptionDetailsInput() DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksVolumeVolumeInfoEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetails</a>

---


### DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference <a name="DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksvolume"

datadatabricksvolume.NewDataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn">ResetAwsKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetAwsKmsKeyArn` <a name="ResetAwsKmsKeyArn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn"></a>

```go
func ResetAwsKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput">AwsKmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn">AwsKmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `AwsKmsKeyArnInput`<sup>Optional</sup> <a name="AwsKmsKeyArnInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput"></a>

```go
func AwsKmsKeyArnInput() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `AwsKmsKeyArn`<sup>Required</sup> <a name="AwsKmsKeyArn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn"></a>

```go
func AwsKmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetailsSseEncryptionDetails</a>

---


### DataDatabricksVolumeVolumeInfoOutputReference <a name="DataDatabricksVolumeVolumeInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksvolume"

datadatabricksvolume.NewDataDatabricksVolumeVolumeInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksVolumeVolumeInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.putEncryptionDetails">PutEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetAccessPoint">ResetAccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetBrowseOnly">ResetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetEncryptionDetails">ResetEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetStorageLocation">ResetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetUpdatedBy">ResetUpdatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetVolumeId">ResetVolumeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionDetails` <a name="PutEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.putEncryptionDetails"></a>

```go
func PutEncryptionDetails(value DataDatabricksVolumeVolumeInfoEncryptionDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.putEncryptionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetails</a>

---

##### `ResetAccessPoint` <a name="ResetAccessPoint" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetAccessPoint"></a>

```go
func ResetAccessPoint()
```

##### `ResetBrowseOnly` <a name="ResetBrowseOnly" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetBrowseOnly"></a>

```go
func ResetBrowseOnly()
```

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetCreatedAt"></a>

```go
func ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetCreatedBy"></a>

```go
func ResetCreatedBy()
```

##### `ResetEncryptionDetails` <a name="ResetEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetEncryptionDetails"></a>

```go
func ResetEncryptionDetails()
```

##### `ResetFullName` <a name="ResetFullName" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetFullName"></a>

```go
func ResetFullName()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetMetastoreId"></a>

```go
func ResetMetastoreId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```

##### `ResetStorageLocation` <a name="ResetStorageLocation" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetStorageLocation"></a>

```go
func ResetStorageLocation()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetUpdatedAt"></a>

```go
func ResetUpdatedAt()
```

##### `ResetUpdatedBy` <a name="ResetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetUpdatedBy"></a>

```go
func ResetUpdatedBy()
```

##### `ResetVolumeId` <a name="ResetVolumeId" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetVolumeId"></a>

```go
func ResetVolumeId()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.encryptionDetails">EncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference">DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.accessPointInput">AccessPointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.browseOnlyInput">BrowseOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.createdAtInput">CreatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.createdByInput">CreatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.encryptionDetailsInput">EncryptionDetailsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.storageLocationInput">StorageLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.updatedAtInput">UpdatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.updatedByInput">UpdatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.volumeIdInput">VolumeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.accessPoint">AccessPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.browseOnly">BrowseOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.storageLocation">StorageLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo">DataDatabricksVolumeVolumeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionDetails`<sup>Required</sup> <a name="EncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.encryptionDetails"></a>

```go
func EncryptionDetails() DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference">DataDatabricksVolumeVolumeInfoEncryptionDetailsOutputReference</a>

---

##### `AccessPointInput`<sup>Optional</sup> <a name="AccessPointInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.accessPointInput"></a>

```go
func AccessPointInput() *string
```

- *Type:* *string

---

##### `BrowseOnlyInput`<sup>Optional</sup> <a name="BrowseOnlyInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.browseOnlyInput"></a>

```go
func BrowseOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.createdAtInput"></a>

```go
func CreatedAtInput() *f64
```

- *Type:* *f64

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.createdByInput"></a>

```go
func CreatedByInput() *string
```

- *Type:* *string

---

##### `EncryptionDetailsInput`<sup>Optional</sup> <a name="EncryptionDetailsInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.encryptionDetailsInput"></a>

```go
func EncryptionDetailsInput() DataDatabricksVolumeVolumeInfoEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoEncryptionDetails">DataDatabricksVolumeVolumeInfoEncryptionDetails</a>

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.fullNameInput"></a>

```go
func FullNameInput() *string
```

- *Type:* *string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.metastoreIdInput"></a>

```go
func MetastoreIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `StorageLocationInput`<sup>Optional</sup> <a name="StorageLocationInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.storageLocationInput"></a>

```go
func StorageLocationInput() *string
```

- *Type:* *string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.updatedAtInput"></a>

```go
func UpdatedAtInput() *f64
```

- *Type:* *f64

---

##### `UpdatedByInput`<sup>Optional</sup> <a name="UpdatedByInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.updatedByInput"></a>

```go
func UpdatedByInput() *string
```

- *Type:* *string

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.volumeIdInput"></a>

```go
func VolumeIdInput() *string
```

- *Type:* *string

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `AccessPoint`<sup>Required</sup> <a name="AccessPoint" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.accessPoint"></a>

```go
func AccessPoint() *string
```

- *Type:* *string

---

##### `BrowseOnly`<sup>Required</sup> <a name="BrowseOnly" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.browseOnly"></a>

```go
func BrowseOnly() interface{}
```

- *Type:* interface{}

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.storageLocation"></a>

```go
func StorageLocation() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *f64
```

- *Type:* *f64

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksVolumeVolumeInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolume.DataDatabricksVolumeVolumeInfo">DataDatabricksVolumeVolumeInfo</a>

---



