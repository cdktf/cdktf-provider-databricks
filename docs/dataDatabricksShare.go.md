# `dataDatabricksShare` Submodule <a name="`dataDatabricksShare` Submodule" id="@cdktf/provider-databricks.dataDatabricksShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksShare <a name="DataDatabricksShare" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share databricks_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/datadatabricksshare"

datadatabricksshare.NewDataDatabricksShare(scope Construct, id *string, config DataDatabricksShareConfig) DataDatabricksShare
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig">DataDatabricksShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig">DataDatabricksShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.putObject">PutObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.resetObject">ResetObject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutObject` <a name="PutObject" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.putObject"></a>

```go
func PutObject(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.putObject.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.resetCreatedAt"></a>

```go
func ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.resetCreatedBy"></a>

```go
func ResetCreatedBy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.resetName"></a>

```go
func ResetName()
```

##### `ResetObject` <a name="ResetObject" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.resetObject"></a>

```go
func ResetObject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksShare resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/datadatabricksshare"

datadatabricksshare.DataDatabricksShare_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/datadatabricksshare"

datadatabricksshare.DataDatabricksShare_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/datadatabricksshare"

datadatabricksshare.DataDatabricksShare_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/datadatabricksshare"

datadatabricksshare.DataDatabricksShare_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksShare resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.object">Object</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList">DataDatabricksShareObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.createdAtInput">CreatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.createdByInput">CreatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.objectInput">ObjectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.object"></a>

```go
func Object() DataDatabricksShareObjectList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList">DataDatabricksShareObjectList</a>

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.createdAtInput"></a>

```go
func CreatedAtInput() *f64
```

- *Type:* *f64

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.createdByInput"></a>

```go
func CreatedByInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.objectInput"></a>

```go
func ObjectInput() interface{}
```

- *Type:* interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShare.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksShareConfig <a name="DataDatabricksShareConfig" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/datadatabricksshare"

&datadatabricksshare.DataDatabricksShareConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CreatedAt: *f64,
	CreatedBy: *string,
	Id: *string,
	Name: *string,
	Object: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#created_at DataDatabricksShare#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.createdBy">CreatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#created_by DataDatabricksShare#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#id DataDatabricksShare#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#name DataDatabricksShare#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.object">Object</a></code> | <code>interface{}</code> | object block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.createdAt"></a>

```go
CreatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#created_at DataDatabricksShare#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.createdBy"></a>

```go
CreatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#created_by DataDatabricksShare#created_by}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#id DataDatabricksShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#name DataDatabricksShare#name}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareConfig.property.object"></a>

```go
Object interface{}
```

- *Type:* interface{}

object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#object DataDatabricksShare#object}

---

### DataDatabricksShareObject <a name="DataDatabricksShareObject" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/datadatabricksshare"

&datadatabricksshare.DataDatabricksShareObject {
	DataObjectType: *string,
	Name: *string,
	AddedAt: *f64,
	AddedBy: *string,
	CdfEnabled: interface{},
	Comment: *string,
	HistoryDataSharingStatus: *string,
	Partition: interface{},
	SharedAs: *string,
	StartVersion: *f64,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.dataObjectType">DataObjectType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#data_object_type DataDatabricksShare#data_object_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#name DataDatabricksShare#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.addedAt">AddedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#added_at DataDatabricksShare#added_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.addedBy">AddedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#added_by DataDatabricksShare#added_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.cdfEnabled">CdfEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#cdf_enabled DataDatabricksShare#cdf_enabled}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#comment DataDatabricksShare#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.historyDataSharingStatus">HistoryDataSharingStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#history_data_sharing_status DataDatabricksShare#history_data_sharing_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.partition">Partition</a></code> | <code>interface{}</code> | partition block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.sharedAs">SharedAs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#shared_as DataDatabricksShare#shared_as}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.startVersion">StartVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#start_version DataDatabricksShare#start_version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#status DataDatabricksShare#status}. |

---

##### `DataObjectType`<sup>Required</sup> <a name="DataObjectType" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.dataObjectType"></a>

```go
DataObjectType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#data_object_type DataDatabricksShare#data_object_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#name DataDatabricksShare#name}.

---

##### `AddedAt`<sup>Optional</sup> <a name="AddedAt" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.addedAt"></a>

```go
AddedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#added_at DataDatabricksShare#added_at}.

---

##### `AddedBy`<sup>Optional</sup> <a name="AddedBy" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.addedBy"></a>

```go
AddedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#added_by DataDatabricksShare#added_by}.

---

##### `CdfEnabled`<sup>Optional</sup> <a name="CdfEnabled" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.cdfEnabled"></a>

```go
CdfEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#cdf_enabled DataDatabricksShare#cdf_enabled}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#comment DataDatabricksShare#comment}.

---

##### `HistoryDataSharingStatus`<sup>Optional</sup> <a name="HistoryDataSharingStatus" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.historyDataSharingStatus"></a>

```go
HistoryDataSharingStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#history_data_sharing_status DataDatabricksShare#history_data_sharing_status}.

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.partition"></a>

```go
Partition interface{}
```

- *Type:* interface{}

partition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#partition DataDatabricksShare#partition}

---

##### `SharedAs`<sup>Optional</sup> <a name="SharedAs" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.sharedAs"></a>

```go
SharedAs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#shared_as DataDatabricksShare#shared_as}.

---

##### `StartVersion`<sup>Optional</sup> <a name="StartVersion" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.startVersion"></a>

```go
StartVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#start_version DataDatabricksShare#start_version}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObject.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#status DataDatabricksShare#status}.

---

### DataDatabricksShareObjectPartition <a name="DataDatabricksShareObjectPartition" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/datadatabricksshare"

&datadatabricksshare.DataDatabricksShareObjectPartition {
	Value: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartition.property.value">Value</a></code> | <code>interface{}</code> | value block. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartition.property.value"></a>

```go
Value interface{}
```

- *Type:* interface{}

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#value DataDatabricksShare#value}

---

### DataDatabricksShareObjectPartitionValue <a name="DataDatabricksShareObjectPartitionValue" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/datadatabricksshare"

&datadatabricksshare.DataDatabricksShareObjectPartitionValue {
	Name: *string,
	Op: *string,
	RecipientPropertyKey: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValue.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#name DataDatabricksShare#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValue.property.op">Op</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#op DataDatabricksShare#op}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValue.property.recipientPropertyKey">RecipientPropertyKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#recipient_property_key DataDatabricksShare#recipient_property_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValue.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#value DataDatabricksShare#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValue.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#name DataDatabricksShare#name}.

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValue.property.op"></a>

```go
Op *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#op DataDatabricksShare#op}.

---

##### `RecipientPropertyKey`<sup>Optional</sup> <a name="RecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValue.property.recipientPropertyKey"></a>

```go
RecipientPropertyKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#recipient_property_key DataDatabricksShare#recipient_property_key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValue.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/data-sources/share#value DataDatabricksShare#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksShareObjectList <a name="DataDatabricksShareObjectList" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/datadatabricksshare"

datadatabricksshare.NewDataDatabricksShareObjectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksShareObjectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.get"></a>

```go
func Get(index *f64) DataDatabricksShareObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksShareObjectOutputReference <a name="DataDatabricksShareObjectOutputReference" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/datadatabricksshare"

datadatabricksshare.NewDataDatabricksShareObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksShareObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.putPartition">PutPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resetAddedAt">ResetAddedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resetAddedBy">ResetAddedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resetCdfEnabled">ResetCdfEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resetHistoryDataSharingStatus">ResetHistoryDataSharingStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resetSharedAs">ResetSharedAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resetStartVersion">ResetStartVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPartition` <a name="PutPartition" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.putPartition"></a>

```go
func PutPartition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.putPartition.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAddedAt` <a name="ResetAddedAt" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resetAddedAt"></a>

```go
func ResetAddedAt()
```

##### `ResetAddedBy` <a name="ResetAddedBy" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resetAddedBy"></a>

```go
func ResetAddedBy()
```

##### `ResetCdfEnabled` <a name="ResetCdfEnabled" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resetCdfEnabled"></a>

```go
func ResetCdfEnabled()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetHistoryDataSharingStatus` <a name="ResetHistoryDataSharingStatus" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resetHistoryDataSharingStatus"></a>

```go
func ResetHistoryDataSharingStatus()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resetPartition"></a>

```go
func ResetPartition()
```

##### `ResetSharedAs` <a name="ResetSharedAs" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resetSharedAs"></a>

```go
func ResetSharedAs()
```

##### `ResetStartVersion` <a name="ResetStartVersion" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resetStartVersion"></a>

```go
func ResetStartVersion()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.partition">Partition</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList">DataDatabricksShareObjectPartitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.addedAtInput">AddedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.addedByInput">AddedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.cdfEnabledInput">CdfEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.dataObjectTypeInput">DataObjectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.historyDataSharingStatusInput">HistoryDataSharingStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.partitionInput">PartitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.sharedAsInput">SharedAsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.startVersionInput">StartVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.addedAt">AddedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.addedBy">AddedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.cdfEnabled">CdfEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.dataObjectType">DataObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.historyDataSharingStatus">HistoryDataSharingStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.sharedAs">SharedAs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.startVersion">StartVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.partition"></a>

```go
func Partition() DataDatabricksShareObjectPartitionList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList">DataDatabricksShareObjectPartitionList</a>

---

##### `AddedAtInput`<sup>Optional</sup> <a name="AddedAtInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.addedAtInput"></a>

```go
func AddedAtInput() *f64
```

- *Type:* *f64

---

##### `AddedByInput`<sup>Optional</sup> <a name="AddedByInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.addedByInput"></a>

```go
func AddedByInput() *string
```

- *Type:* *string

---

##### `CdfEnabledInput`<sup>Optional</sup> <a name="CdfEnabledInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.cdfEnabledInput"></a>

```go
func CdfEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DataObjectTypeInput`<sup>Optional</sup> <a name="DataObjectTypeInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.dataObjectTypeInput"></a>

```go
func DataObjectTypeInput() *string
```

- *Type:* *string

---

##### `HistoryDataSharingStatusInput`<sup>Optional</sup> <a name="HistoryDataSharingStatusInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.historyDataSharingStatusInput"></a>

```go
func HistoryDataSharingStatusInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.partitionInput"></a>

```go
func PartitionInput() interface{}
```

- *Type:* interface{}

---

##### `SharedAsInput`<sup>Optional</sup> <a name="SharedAsInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.sharedAsInput"></a>

```go
func SharedAsInput() *string
```

- *Type:* *string

---

##### `StartVersionInput`<sup>Optional</sup> <a name="StartVersionInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.startVersionInput"></a>

```go
func StartVersionInput() *f64
```

- *Type:* *f64

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `AddedAt`<sup>Required</sup> <a name="AddedAt" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.addedAt"></a>

```go
func AddedAt() *f64
```

- *Type:* *f64

---

##### `AddedBy`<sup>Required</sup> <a name="AddedBy" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.addedBy"></a>

```go
func AddedBy() *string
```

- *Type:* *string

---

##### `CdfEnabled`<sup>Required</sup> <a name="CdfEnabled" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.cdfEnabled"></a>

```go
func CdfEnabled() interface{}
```

- *Type:* interface{}

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `DataObjectType`<sup>Required</sup> <a name="DataObjectType" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.dataObjectType"></a>

```go
func DataObjectType() *string
```

- *Type:* *string

---

##### `HistoryDataSharingStatus`<sup>Required</sup> <a name="HistoryDataSharingStatus" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.historyDataSharingStatus"></a>

```go
func HistoryDataSharingStatus() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SharedAs`<sup>Required</sup> <a name="SharedAs" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.sharedAs"></a>

```go
func SharedAs() *string
```

- *Type:* *string

---

##### `StartVersion`<sup>Required</sup> <a name="StartVersion" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.startVersion"></a>

```go
func StartVersion() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksShareObjectPartitionList <a name="DataDatabricksShareObjectPartitionList" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/datadatabricksshare"

datadatabricksshare.NewDataDatabricksShareObjectPartitionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksShareObjectPartitionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.get"></a>

```go
func Get(index *f64) DataDatabricksShareObjectPartitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksShareObjectPartitionOutputReference <a name="DataDatabricksShareObjectPartitionOutputReference" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/datadatabricksshare"

datadatabricksshare.NewDataDatabricksShareObjectPartitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksShareObjectPartitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.putValue">PutValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.putValue"></a>

```go
func PutValue(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.putValue.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList">DataDatabricksShareObjectPartitionValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.property.value"></a>

```go
func Value() DataDatabricksShareObjectPartitionValueList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList">DataDatabricksShareObjectPartitionValueList</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksShareObjectPartitionValueList <a name="DataDatabricksShareObjectPartitionValueList" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/datadatabricksshare"

datadatabricksshare.NewDataDatabricksShareObjectPartitionValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksShareObjectPartitionValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.get"></a>

```go
func Get(index *f64) DataDatabricksShareObjectPartitionValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksShareObjectPartitionValueOutputReference <a name="DataDatabricksShareObjectPartitionValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/datadatabricksshare"

datadatabricksshare.NewDataDatabricksShareObjectPartitionValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksShareObjectPartitionValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.resetRecipientPropertyKey">ResetRecipientPropertyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRecipientPropertyKey` <a name="ResetRecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.resetRecipientPropertyKey"></a>

```go
func ResetRecipientPropertyKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.opInput">OpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.recipientPropertyKeyInput">RecipientPropertyKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.op">Op</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.recipientPropertyKey">RecipientPropertyKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OpInput`<sup>Optional</sup> <a name="OpInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.opInput"></a>

```go
func OpInput() *string
```

- *Type:* *string

---

##### `RecipientPropertyKeyInput`<sup>Optional</sup> <a name="RecipientPropertyKeyInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.recipientPropertyKeyInput"></a>

```go
func RecipientPropertyKeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.op"></a>

```go
func Op() *string
```

- *Type:* *string

---

##### `RecipientPropertyKey`<sup>Required</sup> <a name="RecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.recipientPropertyKey"></a>

```go
func RecipientPropertyKey() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksShare.DataDatabricksShareObjectPartitionValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



