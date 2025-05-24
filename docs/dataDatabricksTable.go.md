# `dataDatabricksTable` Submodule <a name="`dataDatabricksTable` Submodule" id="@cdktf/provider-databricks.dataDatabricksTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksTable <a name="DataDatabricksTable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table databricks_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTable(scope Construct, id *string, config DataDatabricksTableConfig) DataDatabricksTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig">DataDatabricksTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig">DataDatabricksTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.putTableInfo">PutTableInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.resetTableInfo">ResetTableInfo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTableInfo` <a name="PutTableInfo" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.putTableInfo"></a>

```go
func PutTableInfo(value DataDatabricksTableTableInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.putTableInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.resetId"></a>

```go
func ResetId()
```

##### `ResetTableInfo` <a name="ResetTableInfo" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.resetTableInfo"></a>

```go
func ResetTableInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.DataDatabricksTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.DataDatabricksTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.DataDatabricksTable_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.DataDatabricksTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.tableInfo">TableInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference">DataDatabricksTableTableInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.tableInfoInput">TableInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `TableInfo`<sup>Required</sup> <a name="TableInfo" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.tableInfo"></a>

```go
func TableInfo() DataDatabricksTableTableInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference">DataDatabricksTableTableInfoOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TableInfoInput`<sup>Optional</sup> <a name="TableInfoInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.tableInfoInput"></a>

```go
func TableInfoInput() DataDatabricksTableTableInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksTableConfig <a name="DataDatabricksTableConfig" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

&datadatabrickstable.DataDatabricksTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	TableInfo: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksTable.DataDatabricksTableTableInfo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#name DataDatabricksTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#id DataDatabricksTable#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.tableInfo">TableInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a></code> | table_info block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#name DataDatabricksTable#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#id DataDatabricksTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TableInfo`<sup>Optional</sup> <a name="TableInfo" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.tableInfo"></a>

```go
TableInfo DataDatabricksTableTableInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a>

table_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#table_info DataDatabricksTable#table_info}

---

### DataDatabricksTableTableInfo <a name="DataDatabricksTableTableInfo" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

&datadatabrickstable.DataDatabricksTableTableInfo {
	AccessPoint: *string,
	BrowseOnly: interface{},
	CatalogName: *string,
	Columns: interface{},
	Comment: *string,
	CreatedAt: *f64,
	CreatedBy: *string,
	DataAccessConfigurationId: *string,
	DataSourceFormat: *string,
	DeletedAt: *f64,
	DeltaRuntimePropertiesKvpairs: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs,
	EffectivePredictiveOptimizationFlag: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag,
	EnablePredictiveOptimization: *string,
	EncryptionDetails: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails,
	FullName: *string,
	MetastoreId: *string,
	Name: *string,
	Owner: *string,
	PipelineId: *string,
	Properties: *map[string]*string,
	RowFilter: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter,
	SchemaName: *string,
	SqlPath: *string,
	StorageCredentialName: *string,
	StorageLocation: *string,
	TableConstraints: interface{},
	TableId: *string,
	TableType: *string,
	UpdatedAt: *f64,
	UpdatedBy: *string,
	ViewDefinition: *string,
	ViewDependencies: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.accessPoint">AccessPoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#access_point DataDatabricksTable#access_point}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.browseOnly">BrowseOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#browse_only DataDatabricksTable#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#catalog_name DataDatabricksTable#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.columns">Columns</a></code> | <code>interface{}</code> | columns block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#comment DataDatabricksTable#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#created_at DataDatabricksTable#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.createdBy">CreatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#created_by DataDatabricksTable#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.dataAccessConfigurationId">DataAccessConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#data_access_configuration_id DataDatabricksTable#data_access_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.dataSourceFormat">DataSourceFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#data_source_format DataDatabricksTable#data_source_format}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.deletedAt">DeletedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#deleted_at DataDatabricksTable#deleted_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.deltaRuntimePropertiesKvpairs">DeltaRuntimePropertiesKvpairs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a></code> | delta_runtime_properties_kvpairs block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.effectivePredictiveOptimizationFlag">EffectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a></code> | effective_predictive_optimization_flag block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.enablePredictiveOptimization">EnablePredictiveOptimization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#enable_predictive_optimization DataDatabricksTable#enable_predictive_optimization}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.encryptionDetails">EncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a></code> | encryption_details block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.fullName">FullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#full_name DataDatabricksTable#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#metastore_id DataDatabricksTable#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#name DataDatabricksTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#owner DataDatabricksTable#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.pipelineId">PipelineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#pipeline_id DataDatabricksTable#pipeline_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#properties DataDatabricksTable#properties}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.rowFilter">RowFilter</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a></code> | row_filter block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#schema_name DataDatabricksTable#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.sqlPath">SqlPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#sql_path DataDatabricksTable#sql_path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.storageCredentialName">StorageCredentialName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#storage_credential_name DataDatabricksTable#storage_credential_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.storageLocation">StorageLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#storage_location DataDatabricksTable#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.tableConstraints">TableConstraints</a></code> | <code>interface{}</code> | table_constraints block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.tableId">TableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#table_id DataDatabricksTable#table_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.tableType">TableType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#table_type DataDatabricksTable#table_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#updated_at DataDatabricksTable#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#updated_by DataDatabricksTable#updated_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.viewDefinition">ViewDefinition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#view_definition DataDatabricksTable#view_definition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.viewDependencies">ViewDependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a></code> | view_dependencies block. |

---

##### `AccessPoint`<sup>Optional</sup> <a name="AccessPoint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.accessPoint"></a>

```go
AccessPoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#access_point DataDatabricksTable#access_point}.

---

##### `BrowseOnly`<sup>Optional</sup> <a name="BrowseOnly" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.browseOnly"></a>

```go
BrowseOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#browse_only DataDatabricksTable#browse_only}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#catalog_name DataDatabricksTable#catalog_name}.

---

##### `Columns`<sup>Optional</sup> <a name="Columns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.columns"></a>

```go
Columns interface{}
```

- *Type:* interface{}

columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#columns DataDatabricksTable#columns}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#comment DataDatabricksTable#comment}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.createdAt"></a>

```go
CreatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#created_at DataDatabricksTable#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.createdBy"></a>

```go
CreatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#created_by DataDatabricksTable#created_by}.

---

##### `DataAccessConfigurationId`<sup>Optional</sup> <a name="DataAccessConfigurationId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.dataAccessConfigurationId"></a>

```go
DataAccessConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#data_access_configuration_id DataDatabricksTable#data_access_configuration_id}.

---

##### `DataSourceFormat`<sup>Optional</sup> <a name="DataSourceFormat" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.dataSourceFormat"></a>

```go
DataSourceFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#data_source_format DataDatabricksTable#data_source_format}.

---

##### `DeletedAt`<sup>Optional</sup> <a name="DeletedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.deletedAt"></a>

```go
DeletedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#deleted_at DataDatabricksTable#deleted_at}.

---

##### `DeltaRuntimePropertiesKvpairs`<sup>Optional</sup> <a name="DeltaRuntimePropertiesKvpairs" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.deltaRuntimePropertiesKvpairs"></a>

```go
DeltaRuntimePropertiesKvpairs DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a>

delta_runtime_properties_kvpairs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#delta_runtime_properties_kvpairs DataDatabricksTable#delta_runtime_properties_kvpairs}

---

##### `EffectivePredictiveOptimizationFlag`<sup>Optional</sup> <a name="EffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.effectivePredictiveOptimizationFlag"></a>

```go
EffectivePredictiveOptimizationFlag DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#effective_predictive_optimization_flag DataDatabricksTable#effective_predictive_optimization_flag}

---

##### `EnablePredictiveOptimization`<sup>Optional</sup> <a name="EnablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.enablePredictiveOptimization"></a>

```go
EnablePredictiveOptimization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#enable_predictive_optimization DataDatabricksTable#enable_predictive_optimization}.

---

##### `EncryptionDetails`<sup>Optional</sup> <a name="EncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.encryptionDetails"></a>

```go
EncryptionDetails DataDatabricksTableTableInfoEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a>

encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#encryption_details DataDatabricksTable#encryption_details}

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.fullName"></a>

```go
FullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#full_name DataDatabricksTable#full_name}.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.metastoreId"></a>

```go
MetastoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#metastore_id DataDatabricksTable#metastore_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#name DataDatabricksTable#name}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#owner DataDatabricksTable#owner}.

---

##### `PipelineId`<sup>Optional</sup> <a name="PipelineId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.pipelineId"></a>

```go
PipelineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#pipeline_id DataDatabricksTable#pipeline_id}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#properties DataDatabricksTable#properties}.

---

##### `RowFilter`<sup>Optional</sup> <a name="RowFilter" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.rowFilter"></a>

```go
RowFilter DataDatabricksTableTableInfoRowFilter
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a>

row_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#row_filter DataDatabricksTable#row_filter}

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#schema_name DataDatabricksTable#schema_name}.

---

##### `SqlPath`<sup>Optional</sup> <a name="SqlPath" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.sqlPath"></a>

```go
SqlPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#sql_path DataDatabricksTable#sql_path}.

---

##### `StorageCredentialName`<sup>Optional</sup> <a name="StorageCredentialName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.storageCredentialName"></a>

```go
StorageCredentialName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#storage_credential_name DataDatabricksTable#storage_credential_name}.

---

##### `StorageLocation`<sup>Optional</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.storageLocation"></a>

```go
StorageLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#storage_location DataDatabricksTable#storage_location}.

---

##### `TableConstraints`<sup>Optional</sup> <a name="TableConstraints" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.tableConstraints"></a>

```go
TableConstraints interface{}
```

- *Type:* interface{}

table_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#table_constraints DataDatabricksTable#table_constraints}

---

##### `TableId`<sup>Optional</sup> <a name="TableId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.tableId"></a>

```go
TableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#table_id DataDatabricksTable#table_id}.

---

##### `TableType`<sup>Optional</sup> <a name="TableType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.tableType"></a>

```go
TableType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#table_type DataDatabricksTable#table_type}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.updatedAt"></a>

```go
UpdatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#updated_at DataDatabricksTable#updated_at}.

---

##### `UpdatedBy`<sup>Optional</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.updatedBy"></a>

```go
UpdatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#updated_by DataDatabricksTable#updated_by}.

---

##### `ViewDefinition`<sup>Optional</sup> <a name="ViewDefinition" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.viewDefinition"></a>

```go
ViewDefinition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#view_definition DataDatabricksTable#view_definition}.

---

##### `ViewDependencies`<sup>Optional</sup> <a name="ViewDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.viewDependencies"></a>

```go
ViewDependencies DataDatabricksTableTableInfoViewDependencies
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a>

view_dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#view_dependencies DataDatabricksTable#view_dependencies}

---

### DataDatabricksTableTableInfoColumns <a name="DataDatabricksTableTableInfoColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

&datadatabrickstable.DataDatabricksTableTableInfoColumns {
	Comment: *string,
	Mask: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask,
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#comment DataDatabricksTable#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a></code> | mask block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#name DataDatabricksTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.nullable">Nullable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#nullable DataDatabricksTable#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.partitionIndex">PartitionIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#partition_index DataDatabricksTable#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.position">Position</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#position DataDatabricksTable#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeIntervalType">TypeIntervalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#type_interval_type DataDatabricksTable#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeJson">TypeJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#type_json DataDatabricksTable#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeName">TypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#type_name DataDatabricksTable#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typePrecision">TypePrecision</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#type_precision DataDatabricksTable#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeScale">TypeScale</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#type_scale DataDatabricksTable#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeText">TypeText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#type_text DataDatabricksTable#type_text}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#comment DataDatabricksTable#comment}.

---

##### `Mask`<sup>Optional</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.mask"></a>

```go
Mask DataDatabricksTableTableInfoColumnsMask
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a>

mask block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#mask DataDatabricksTable#mask}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#name DataDatabricksTable#name}.

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.nullable"></a>

```go
Nullable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#nullable DataDatabricksTable#nullable}.

---

##### `PartitionIndex`<sup>Optional</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.partitionIndex"></a>

```go
PartitionIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#partition_index DataDatabricksTable#partition_index}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.position"></a>

```go
Position *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#position DataDatabricksTable#position}.

---

##### `TypeIntervalType`<sup>Optional</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeIntervalType"></a>

```go
TypeIntervalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#type_interval_type DataDatabricksTable#type_interval_type}.

---

##### `TypeJson`<sup>Optional</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeJson"></a>

```go
TypeJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#type_json DataDatabricksTable#type_json}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#type_name DataDatabricksTable#type_name}.

---

##### `TypePrecision`<sup>Optional</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typePrecision"></a>

```go
TypePrecision *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#type_precision DataDatabricksTable#type_precision}.

---

##### `TypeScale`<sup>Optional</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeScale"></a>

```go
TypeScale *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#type_scale DataDatabricksTable#type_scale}.

---

##### `TypeText`<sup>Optional</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeText"></a>

```go
TypeText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#type_text DataDatabricksTable#type_text}.

---

### DataDatabricksTableTableInfoColumnsMask <a name="DataDatabricksTableTableInfoColumnsMask" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

&datadatabrickstable.DataDatabricksTableTableInfoColumnsMask {
	FunctionName: *string,
	UsingColumnNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask.property.functionName">FunctionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#function_name DataDatabricksTable#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask.property.usingColumnNames">UsingColumnNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#using_column_names DataDatabricksTable#using_column_names}. |

---

##### `FunctionName`<sup>Optional</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#function_name DataDatabricksTable#function_name}.

---

##### `UsingColumnNames`<sup>Optional</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask.property.usingColumnNames"></a>

```go
UsingColumnNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#using_column_names DataDatabricksTable#using_column_names}.

---

### DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs <a name="DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

&datadatabrickstable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs {
	DeltaRuntimeProperties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs.property.deltaRuntimeProperties">DeltaRuntimeProperties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#delta_runtime_properties DataDatabricksTable#delta_runtime_properties}. |

---

##### `DeltaRuntimeProperties`<sup>Required</sup> <a name="DeltaRuntimeProperties" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs.property.deltaRuntimeProperties"></a>

```go
DeltaRuntimeProperties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#delta_runtime_properties DataDatabricksTable#delta_runtime_properties}.

---

### DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag <a name="DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

&datadatabrickstable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag {
	Value: *string,
	InheritedFromName: *string,
	InheritedFromType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#value DataDatabricksTable#value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName">InheritedFromName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#inherited_from_name DataDatabricksTable#inherited_from_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType">InheritedFromType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#inherited_from_type DataDatabricksTable#inherited_from_type}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#value DataDatabricksTable#value}.

---

##### `InheritedFromName`<sup>Optional</sup> <a name="InheritedFromName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName"></a>

```go
InheritedFromName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#inherited_from_name DataDatabricksTable#inherited_from_name}.

---

##### `InheritedFromType`<sup>Optional</sup> <a name="InheritedFromType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType"></a>

```go
InheritedFromType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#inherited_from_type DataDatabricksTable#inherited_from_type}.

---

### DataDatabricksTableTableInfoEncryptionDetails <a name="DataDatabricksTableTableInfoEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

&datadatabrickstable.DataDatabricksTableTableInfoEncryptionDetails {
	SseEncryptionDetails: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails.property.sseEncryptionDetails">SseEncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a></code> | sse_encryption_details block. |

---

##### `SseEncryptionDetails`<sup>Optional</sup> <a name="SseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails.property.sseEncryptionDetails"></a>

```go
SseEncryptionDetails DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a>

sse_encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#sse_encryption_details DataDatabricksTable#sse_encryption_details}

---

### DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails <a name="DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

&datadatabrickstable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails {
	Algorithm: *string,
	AwsKmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails.property.algorithm">Algorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#algorithm DataDatabricksTable#algorithm}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn">AwsKmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#aws_kms_key_arn DataDatabricksTable#aws_kms_key_arn}. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#algorithm DataDatabricksTable#algorithm}.

---

##### `AwsKmsKeyArn`<sup>Optional</sup> <a name="AwsKmsKeyArn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn"></a>

```go
AwsKmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#aws_kms_key_arn DataDatabricksTable#aws_kms_key_arn}.

---

### DataDatabricksTableTableInfoRowFilter <a name="DataDatabricksTableTableInfoRowFilter" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

&datadatabrickstable.DataDatabricksTableTableInfoRowFilter {
	FunctionName: *string,
	InputColumnNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter.property.functionName">FunctionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#function_name DataDatabricksTable#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter.property.inputColumnNames">InputColumnNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#input_column_names DataDatabricksTable#input_column_names}. |

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#function_name DataDatabricksTable#function_name}.

---

##### `InputColumnNames`<sup>Required</sup> <a name="InputColumnNames" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter.property.inputColumnNames"></a>

```go
InputColumnNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#input_column_names DataDatabricksTable#input_column_names}.

---

### DataDatabricksTableTableInfoTableConstraints <a name="DataDatabricksTableTableInfoTableConstraints" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

&datadatabrickstable.DataDatabricksTableTableInfoTableConstraints {
	ForeignKeyConstraint: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint,
	NamedTableConstraint: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint,
	PrimaryKeyConstraint: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.property.foreignKeyConstraint">ForeignKeyConstraint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a></code> | foreign_key_constraint block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.property.namedTableConstraint">NamedTableConstraint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a></code> | named_table_constraint block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.property.primaryKeyConstraint">PrimaryKeyConstraint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a></code> | primary_key_constraint block. |

---

##### `ForeignKeyConstraint`<sup>Optional</sup> <a name="ForeignKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.property.foreignKeyConstraint"></a>

```go
ForeignKeyConstraint DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a>

foreign_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#foreign_key_constraint DataDatabricksTable#foreign_key_constraint}

---

##### `NamedTableConstraint`<sup>Optional</sup> <a name="NamedTableConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.property.namedTableConstraint"></a>

```go
NamedTableConstraint DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a>

named_table_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#named_table_constraint DataDatabricksTable#named_table_constraint}

---

##### `PrimaryKeyConstraint`<sup>Optional</sup> <a name="PrimaryKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.property.primaryKeyConstraint"></a>

```go
PrimaryKeyConstraint DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a>

primary_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#primary_key_constraint DataDatabricksTable#primary_key_constraint}

---

### DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint <a name="DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

&datadatabrickstable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint {
	ChildColumns: *[]*string,
	Name: *string,
	ParentColumns: *[]*string,
	ParentTable: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.childColumns">ChildColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#child_columns DataDatabricksTable#child_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#name DataDatabricksTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.parentColumns">ParentColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#parent_columns DataDatabricksTable#parent_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.parentTable">ParentTable</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#parent_table DataDatabricksTable#parent_table}. |

---

##### `ChildColumns`<sup>Required</sup> <a name="ChildColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.childColumns"></a>

```go
ChildColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#child_columns DataDatabricksTable#child_columns}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#name DataDatabricksTable#name}.

---

##### `ParentColumns`<sup>Required</sup> <a name="ParentColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.parentColumns"></a>

```go
ParentColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#parent_columns DataDatabricksTable#parent_columns}.

---

##### `ParentTable`<sup>Required</sup> <a name="ParentTable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.parentTable"></a>

```go
ParentTable *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#parent_table DataDatabricksTable#parent_table}.

---

### DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint <a name="DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

&datadatabrickstable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#name DataDatabricksTable#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#name DataDatabricksTable#name}.

---

### DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint <a name="DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

&datadatabrickstable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint {
	ChildColumns: *[]*string,
	Name: *string,
	TimeseriesColumns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.childColumns">ChildColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#child_columns DataDatabricksTable#child_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#name DataDatabricksTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.timeseriesColumns">TimeseriesColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#timeseries_columns DataDatabricksTable#timeseries_columns}. |

---

##### `ChildColumns`<sup>Required</sup> <a name="ChildColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.childColumns"></a>

```go
ChildColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#child_columns DataDatabricksTable#child_columns}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#name DataDatabricksTable#name}.

---

##### `TimeseriesColumns`<sup>Optional</sup> <a name="TimeseriesColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.timeseriesColumns"></a>

```go
TimeseriesColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#timeseries_columns DataDatabricksTable#timeseries_columns}.

---

### DataDatabricksTableTableInfoViewDependencies <a name="DataDatabricksTableTableInfoViewDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

&datadatabrickstable.DataDatabricksTableTableInfoViewDependencies {
	Dependencies: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies.property.dependencies">Dependencies</a></code> | <code>interface{}</code> | dependencies block. |

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies.property.dependencies"></a>

```go
Dependencies interface{}
```

- *Type:* interface{}

dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#dependencies DataDatabricksTable#dependencies}

---

### DataDatabricksTableTableInfoViewDependenciesDependencies <a name="DataDatabricksTableTableInfoViewDependenciesDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

&datadatabrickstable.DataDatabricksTableTableInfoViewDependenciesDependencies {
	Function: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction,
	Table: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.function">Function</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a></code> | function block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.table">Table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a></code> | table block. |

---

##### `Function`<sup>Optional</sup> <a name="Function" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.function"></a>

```go
Function DataDatabricksTableTableInfoViewDependenciesDependenciesFunction
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a>

function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#function DataDatabricksTable#function}

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.table"></a>

```go
Table DataDatabricksTableTableInfoViewDependenciesDependenciesTable
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a>

table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#table DataDatabricksTable#table}

---

### DataDatabricksTableTableInfoViewDependenciesDependenciesFunction <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesFunction" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

&datadatabrickstable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction {
	FunctionFullName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction.property.functionFullName">FunctionFullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#function_full_name DataDatabricksTable#function_full_name}. |

---

##### `FunctionFullName`<sup>Required</sup> <a name="FunctionFullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction.property.functionFullName"></a>

```go
FunctionFullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#function_full_name DataDatabricksTable#function_full_name}.

---

### DataDatabricksTableTableInfoViewDependenciesDependenciesTable <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesTable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

&datadatabrickstable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable {
	TableFullName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable.property.tableFullName">TableFullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#table_full_name DataDatabricksTable#table_full_name}. |

---

##### `TableFullName`<sup>Required</sup> <a name="TableFullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable.property.tableFullName"></a>

```go
TableFullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/data-sources/table#table_full_name DataDatabricksTable#table_full_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksTableTableInfoColumnsList <a name="DataDatabricksTableTableInfoColumnsList" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksTableTableInfoColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.get"></a>

```go
func Get(index *f64) DataDatabricksTableTableInfoColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksTableTableInfoColumnsMaskOutputReference <a name="DataDatabricksTableTableInfoColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoColumnsMaskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksTableTableInfoColumnsMaskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resetFunctionName">ResetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resetUsingColumnNames">ResetUsingColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctionName` <a name="ResetFunctionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resetFunctionName"></a>

```go
func ResetFunctionName()
```

##### `ResetUsingColumnNames` <a name="ResetUsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resetUsingColumnNames"></a>

```go
func ResetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.usingColumnNamesInput">UsingColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.usingColumnNames">UsingColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `UsingColumnNamesInput`<sup>Optional</sup> <a name="UsingColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```go
func UsingColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `UsingColumnNames`<sup>Required</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.usingColumnNames"></a>

```go
func UsingColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksTableTableInfoColumnsMask
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a>

---


### DataDatabricksTableTableInfoColumnsOutputReference <a name="DataDatabricksTableTableInfoColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksTableTableInfoColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.putMask">PutMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetMask">ResetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetNullable">ResetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetPartitionIndex">ResetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeIntervalType">ResetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeJson">ResetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypePrecision">ResetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeScale">ResetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeText">ResetTypeText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMask` <a name="PutMask" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.putMask"></a>

```go
func PutMask(value DataDatabricksTableTableInfoColumnsMask)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetMask` <a name="ResetMask" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetMask"></a>

```go
func ResetMask()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNullable` <a name="ResetNullable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetNullable"></a>

```go
func ResetNullable()
```

##### `ResetPartitionIndex` <a name="ResetPartitionIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetPartitionIndex"></a>

```go
func ResetPartitionIndex()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetPosition"></a>

```go
func ResetPosition()
```

##### `ResetTypeIntervalType` <a name="ResetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeIntervalType"></a>

```go
func ResetTypeIntervalType()
```

##### `ResetTypeJson` <a name="ResetTypeJson" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeJson"></a>

```go
func ResetTypeJson()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeName"></a>

```go
func ResetTypeName()
```

##### `ResetTypePrecision` <a name="ResetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypePrecision"></a>

```go
func ResetTypePrecision()
```

##### `ResetTypeScale` <a name="ResetTypeScale" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeScale"></a>

```go
func ResetTypeScale()
```

##### `ResetTypeText` <a name="ResetTypeText" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeText"></a>

```go
func ResetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference">DataDatabricksTableTableInfoColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.maskInput">MaskInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.nullableInput">NullableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.partitionIndexInput">PartitionIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.positionInput">PositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeIntervalTypeInput">TypeIntervalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeJsonInput">TypeJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typePrecisionInput">TypePrecisionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeScaleInput">TypeScaleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeTextInput">TypeTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.nullable">Nullable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.partitionIndex">PartitionIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeIntervalType">TypeIntervalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeJson">TypeJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typePrecision">TypePrecision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeScale">TypeScale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeText">TypeText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mask`<sup>Required</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.mask"></a>

```go
func Mask() DataDatabricksTableTableInfoColumnsMaskOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference">DataDatabricksTableTableInfoColumnsMaskOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `MaskInput`<sup>Optional</sup> <a name="MaskInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.maskInput"></a>

```go
func MaskInput() DataDatabricksTableTableInfoColumnsMask
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NullableInput`<sup>Optional</sup> <a name="NullableInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.nullableInput"></a>

```go
func NullableInput() interface{}
```

- *Type:* interface{}

---

##### `PartitionIndexInput`<sup>Optional</sup> <a name="PartitionIndexInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.partitionIndexInput"></a>

```go
func PartitionIndexInput() *f64
```

- *Type:* *f64

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.positionInput"></a>

```go
func PositionInput() *f64
```

- *Type:* *f64

---

##### `TypeIntervalTypeInput`<sup>Optional</sup> <a name="TypeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeIntervalTypeInput"></a>

```go
func TypeIntervalTypeInput() *string
```

- *Type:* *string

---

##### `TypeJsonInput`<sup>Optional</sup> <a name="TypeJsonInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeJsonInput"></a>

```go
func TypeJsonInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `TypePrecisionInput`<sup>Optional</sup> <a name="TypePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typePrecisionInput"></a>

```go
func TypePrecisionInput() *f64
```

- *Type:* *f64

---

##### `TypeScaleInput`<sup>Optional</sup> <a name="TypeScaleInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeScaleInput"></a>

```go
func TypeScaleInput() *f64
```

- *Type:* *f64

---

##### `TypeTextInput`<sup>Optional</sup> <a name="TypeTextInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeTextInput"></a>

```go
func TypeTextInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Nullable`<sup>Required</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.nullable"></a>

```go
func Nullable() interface{}
```

- *Type:* interface{}

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.partitionIndex"></a>

```go
func PartitionIndex() *f64
```

- *Type:* *f64

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `TypeIntervalType`<sup>Required</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeIntervalType"></a>

```go
func TypeIntervalType() *string
```

- *Type:* *string

---

##### `TypeJson`<sup>Required</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeJson"></a>

```go
func TypeJson() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `TypePrecision`<sup>Required</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typePrecision"></a>

```go
func TypePrecision() *f64
```

- *Type:* *f64

---

##### `TypeScale`<sup>Required</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeScale"></a>

```go
func TypeScale() *f64
```

- *Type:* *f64

---

##### `TypeText`<sup>Required</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeText"></a>

```go
func TypeText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference <a name="DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.deltaRuntimePropertiesInput">DeltaRuntimePropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.deltaRuntimeProperties">DeltaRuntimeProperties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeltaRuntimePropertiesInput`<sup>Optional</sup> <a name="DeltaRuntimePropertiesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.deltaRuntimePropertiesInput"></a>

```go
func DeltaRuntimePropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeltaRuntimeProperties`<sup>Required</sup> <a name="DeltaRuntimeProperties" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.deltaRuntimeProperties"></a>

```go
func DeltaRuntimeProperties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a>

---


### DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference <a name="DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName">ResetInheritedFromName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType">ResetInheritedFromType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInheritedFromName` <a name="ResetInheritedFromName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName"></a>

```go
func ResetInheritedFromName()
```

##### `ResetInheritedFromType` <a name="ResetInheritedFromType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType"></a>

```go
func ResetInheritedFromType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput">InheritedFromNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput">InheritedFromTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName">InheritedFromName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType">InheritedFromType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InheritedFromNameInput`<sup>Optional</sup> <a name="InheritedFromNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput"></a>

```go
func InheritedFromNameInput() *string
```

- *Type:* *string

---

##### `InheritedFromTypeInput`<sup>Optional</sup> <a name="InheritedFromTypeInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput"></a>

```go
func InheritedFromTypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `InheritedFromName`<sup>Required</sup> <a name="InheritedFromName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName"></a>

```go
func InheritedFromName() *string
```

- *Type:* *string

---

##### `InheritedFromType`<sup>Required</sup> <a name="InheritedFromType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType"></a>

```go
func InheritedFromType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a>

---


### DataDatabricksTableTableInfoEncryptionDetailsOutputReference <a name="DataDatabricksTableTableInfoEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoEncryptionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksTableTableInfoEncryptionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.putSseEncryptionDetails">PutSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.resetSseEncryptionDetails">ResetSseEncryptionDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSseEncryptionDetails` <a name="PutSseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.putSseEncryptionDetails"></a>

```go
func PutSseEncryptionDetails(value DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.putSseEncryptionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a>

---

##### `ResetSseEncryptionDetails` <a name="ResetSseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.resetSseEncryptionDetails"></a>

```go
func ResetSseEncryptionDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.sseEncryptionDetails">SseEncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput">SseEncryptionDetailsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SseEncryptionDetails`<sup>Required</sup> <a name="SseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.sseEncryptionDetails"></a>

```go
func SseEncryptionDetails() DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference</a>

---

##### `SseEncryptionDetailsInput`<sup>Optional</sup> <a name="SseEncryptionDetailsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput"></a>

```go
func SseEncryptionDetailsInput() DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksTableTableInfoEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a>

---


### DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference <a name="DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn">ResetAwsKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetAwsKmsKeyArn` <a name="ResetAwsKmsKeyArn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn"></a>

```go
func ResetAwsKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput">AwsKmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn">AwsKmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `AwsKmsKeyArnInput`<sup>Optional</sup> <a name="AwsKmsKeyArnInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput"></a>

```go
func AwsKmsKeyArnInput() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `AwsKmsKeyArn`<sup>Required</sup> <a name="AwsKmsKeyArn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn"></a>

```go
func AwsKmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a>

---


### DataDatabricksTableTableInfoOutputReference <a name="DataDatabricksTableTableInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksTableTableInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putColumns">PutColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putDeltaRuntimePropertiesKvpairs">PutDeltaRuntimePropertiesKvpairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putEffectivePredictiveOptimizationFlag">PutEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putEncryptionDetails">PutEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putRowFilter">PutRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putTableConstraints">PutTableConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putViewDependencies">PutViewDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetAccessPoint">ResetAccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetBrowseOnly">ResetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetColumns">ResetColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDataAccessConfigurationId">ResetDataAccessConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDataSourceFormat">ResetDataSourceFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDeletedAt">ResetDeletedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDeltaRuntimePropertiesKvpairs">ResetDeltaRuntimePropertiesKvpairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetEffectivePredictiveOptimizationFlag">ResetEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetEnablePredictiveOptimization">ResetEnablePredictiveOptimization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetEncryptionDetails">ResetEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetPipelineId">ResetPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetRowFilter">ResetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetSqlPath">ResetSqlPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetStorageCredentialName">ResetStorageCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetStorageLocation">ResetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetTableConstraints">ResetTableConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetTableId">ResetTableId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetTableType">ResetTableType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetUpdatedBy">ResetUpdatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetViewDefinition">ResetViewDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetViewDependencies">ResetViewDependencies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumns` <a name="PutColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putColumns"></a>

```go
func PutColumns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putColumns.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDeltaRuntimePropertiesKvpairs` <a name="PutDeltaRuntimePropertiesKvpairs" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putDeltaRuntimePropertiesKvpairs"></a>

```go
func PutDeltaRuntimePropertiesKvpairs(value DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putDeltaRuntimePropertiesKvpairs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a>

---

##### `PutEffectivePredictiveOptimizationFlag` <a name="PutEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putEffectivePredictiveOptimizationFlag"></a>

```go
func PutEffectivePredictiveOptimizationFlag(value DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putEffectivePredictiveOptimizationFlag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a>

---

##### `PutEncryptionDetails` <a name="PutEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putEncryptionDetails"></a>

```go
func PutEncryptionDetails(value DataDatabricksTableTableInfoEncryptionDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putEncryptionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a>

---

##### `PutRowFilter` <a name="PutRowFilter" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putRowFilter"></a>

```go
func PutRowFilter(value DataDatabricksTableTableInfoRowFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putRowFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a>

---

##### `PutTableConstraints` <a name="PutTableConstraints" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putTableConstraints"></a>

```go
func PutTableConstraints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putTableConstraints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutViewDependencies` <a name="PutViewDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putViewDependencies"></a>

```go
func PutViewDependencies(value DataDatabricksTableTableInfoViewDependencies)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putViewDependencies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a>

---

##### `ResetAccessPoint` <a name="ResetAccessPoint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetAccessPoint"></a>

```go
func ResetAccessPoint()
```

##### `ResetBrowseOnly` <a name="ResetBrowseOnly" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetBrowseOnly"></a>

```go
func ResetBrowseOnly()
```

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```

##### `ResetColumns` <a name="ResetColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetColumns"></a>

```go
func ResetColumns()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetCreatedAt"></a>

```go
func ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetCreatedBy"></a>

```go
func ResetCreatedBy()
```

##### `ResetDataAccessConfigurationId` <a name="ResetDataAccessConfigurationId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDataAccessConfigurationId"></a>

```go
func ResetDataAccessConfigurationId()
```

##### `ResetDataSourceFormat` <a name="ResetDataSourceFormat" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDataSourceFormat"></a>

```go
func ResetDataSourceFormat()
```

##### `ResetDeletedAt` <a name="ResetDeletedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDeletedAt"></a>

```go
func ResetDeletedAt()
```

##### `ResetDeltaRuntimePropertiesKvpairs` <a name="ResetDeltaRuntimePropertiesKvpairs" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDeltaRuntimePropertiesKvpairs"></a>

```go
func ResetDeltaRuntimePropertiesKvpairs()
```

##### `ResetEffectivePredictiveOptimizationFlag` <a name="ResetEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetEffectivePredictiveOptimizationFlag"></a>

```go
func ResetEffectivePredictiveOptimizationFlag()
```

##### `ResetEnablePredictiveOptimization` <a name="ResetEnablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetEnablePredictiveOptimization"></a>

```go
func ResetEnablePredictiveOptimization()
```

##### `ResetEncryptionDetails` <a name="ResetEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetEncryptionDetails"></a>

```go
func ResetEncryptionDetails()
```

##### `ResetFullName` <a name="ResetFullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetFullName"></a>

```go
func ResetFullName()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetMetastoreId"></a>

```go
func ResetMetastoreId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetPipelineId` <a name="ResetPipelineId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetPipelineId"></a>

```go
func ResetPipelineId()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetRowFilter` <a name="ResetRowFilter" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetRowFilter"></a>

```go
func ResetRowFilter()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```

##### `ResetSqlPath` <a name="ResetSqlPath" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetSqlPath"></a>

```go
func ResetSqlPath()
```

##### `ResetStorageCredentialName` <a name="ResetStorageCredentialName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetStorageCredentialName"></a>

```go
func ResetStorageCredentialName()
```

##### `ResetStorageLocation` <a name="ResetStorageLocation" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetStorageLocation"></a>

```go
func ResetStorageLocation()
```

##### `ResetTableConstraints` <a name="ResetTableConstraints" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetTableConstraints"></a>

```go
func ResetTableConstraints()
```

##### `ResetTableId` <a name="ResetTableId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetTableId"></a>

```go
func ResetTableId()
```

##### `ResetTableType` <a name="ResetTableType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetTableType"></a>

```go
func ResetTableType()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetUpdatedAt"></a>

```go
func ResetUpdatedAt()
```

##### `ResetUpdatedBy` <a name="ResetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetUpdatedBy"></a>

```go
func ResetUpdatedBy()
```

##### `ResetViewDefinition` <a name="ResetViewDefinition" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetViewDefinition"></a>

```go
func ResetViewDefinition()
```

##### `ResetViewDependencies` <a name="ResetViewDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetViewDependencies"></a>

```go
func ResetViewDependencies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList">DataDatabricksTableTableInfoColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deltaRuntimePropertiesKvpairs">DeltaRuntimePropertiesKvpairs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.effectivePredictiveOptimizationFlag">EffectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.encryptionDetails">EncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference">DataDatabricksTableTableInfoEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.rowFilter">RowFilter</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference">DataDatabricksTableTableInfoRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableConstraints">TableConstraints</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList">DataDatabricksTableTableInfoTableConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDependencies">ViewDependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference">DataDatabricksTableTableInfoViewDependenciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.accessPointInput">AccessPointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.browseOnlyInput">BrowseOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdAtInput">CreatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdByInput">CreatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataAccessConfigurationIdInput">DataAccessConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataSourceFormatInput">DataSourceFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deletedAtInput">DeletedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deltaRuntimePropertiesKvpairsInput">DeltaRuntimePropertiesKvpairsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.effectivePredictiveOptimizationFlagInput">EffectivePredictiveOptimizationFlagInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.enablePredictiveOptimizationInput">EnablePredictiveOptimizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.encryptionDetailsInput">EncryptionDetailsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.pipelineIdInput">PipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.rowFilterInput">RowFilterInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.sqlPathInput">SqlPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageCredentialNameInput">StorageCredentialNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageLocationInput">StorageLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableConstraintsInput">TableConstraintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableTypeInput">TableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedAtInput">UpdatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedByInput">UpdatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDefinitionInput">ViewDefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDependenciesInput">ViewDependenciesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.accessPoint">AccessPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.browseOnly">BrowseOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataAccessConfigurationId">DataAccessConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataSourceFormat">DataSourceFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deletedAt">DeletedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.enablePredictiveOptimization">EnablePredictiveOptimization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.sqlPath">SqlPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageCredentialName">StorageCredentialName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageLocation">StorageLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableType">TableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDefinition">ViewDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.columns"></a>

```go
func Columns() DataDatabricksTableTableInfoColumnsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList">DataDatabricksTableTableInfoColumnsList</a>

---

##### `DeltaRuntimePropertiesKvpairs`<sup>Required</sup> <a name="DeltaRuntimePropertiesKvpairs" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deltaRuntimePropertiesKvpairs"></a>

```go
func DeltaRuntimePropertiesKvpairs() DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference</a>

---

##### `EffectivePredictiveOptimizationFlag`<sup>Required</sup> <a name="EffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.effectivePredictiveOptimizationFlag"></a>

```go
func EffectivePredictiveOptimizationFlag() DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference</a>

---

##### `EncryptionDetails`<sup>Required</sup> <a name="EncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.encryptionDetails"></a>

```go
func EncryptionDetails() DataDatabricksTableTableInfoEncryptionDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference">DataDatabricksTableTableInfoEncryptionDetailsOutputReference</a>

---

##### `RowFilter`<sup>Required</sup> <a name="RowFilter" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.rowFilter"></a>

```go
func RowFilter() DataDatabricksTableTableInfoRowFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference">DataDatabricksTableTableInfoRowFilterOutputReference</a>

---

##### `TableConstraints`<sup>Required</sup> <a name="TableConstraints" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableConstraints"></a>

```go
func TableConstraints() DataDatabricksTableTableInfoTableConstraintsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList">DataDatabricksTableTableInfoTableConstraintsList</a>

---

##### `ViewDependencies`<sup>Required</sup> <a name="ViewDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDependencies"></a>

```go
func ViewDependencies() DataDatabricksTableTableInfoViewDependenciesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference">DataDatabricksTableTableInfoViewDependenciesOutputReference</a>

---

##### `AccessPointInput`<sup>Optional</sup> <a name="AccessPointInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.accessPointInput"></a>

```go
func AccessPointInput() *string
```

- *Type:* *string

---

##### `BrowseOnlyInput`<sup>Optional</sup> <a name="BrowseOnlyInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.browseOnlyInput"></a>

```go
func BrowseOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.columnsInput"></a>

```go
func ColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdAtInput"></a>

```go
func CreatedAtInput() *f64
```

- *Type:* *f64

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdByInput"></a>

```go
func CreatedByInput() *string
```

- *Type:* *string

---

##### `DataAccessConfigurationIdInput`<sup>Optional</sup> <a name="DataAccessConfigurationIdInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataAccessConfigurationIdInput"></a>

```go
func DataAccessConfigurationIdInput() *string
```

- *Type:* *string

---

##### `DataSourceFormatInput`<sup>Optional</sup> <a name="DataSourceFormatInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataSourceFormatInput"></a>

```go
func DataSourceFormatInput() *string
```

- *Type:* *string

---

##### `DeletedAtInput`<sup>Optional</sup> <a name="DeletedAtInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deletedAtInput"></a>

```go
func DeletedAtInput() *f64
```

- *Type:* *f64

---

##### `DeltaRuntimePropertiesKvpairsInput`<sup>Optional</sup> <a name="DeltaRuntimePropertiesKvpairsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deltaRuntimePropertiesKvpairsInput"></a>

```go
func DeltaRuntimePropertiesKvpairsInput() DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a>

---

##### `EffectivePredictiveOptimizationFlagInput`<sup>Optional</sup> <a name="EffectivePredictiveOptimizationFlagInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.effectivePredictiveOptimizationFlagInput"></a>

```go
func EffectivePredictiveOptimizationFlagInput() DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a>

---

##### `EnablePredictiveOptimizationInput`<sup>Optional</sup> <a name="EnablePredictiveOptimizationInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.enablePredictiveOptimizationInput"></a>

```go
func EnablePredictiveOptimizationInput() *string
```

- *Type:* *string

---

##### `EncryptionDetailsInput`<sup>Optional</sup> <a name="EncryptionDetailsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.encryptionDetailsInput"></a>

```go
func EncryptionDetailsInput() DataDatabricksTableTableInfoEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a>

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.fullNameInput"></a>

```go
func FullNameInput() *string
```

- *Type:* *string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.metastoreIdInput"></a>

```go
func MetastoreIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `PipelineIdInput`<sup>Optional</sup> <a name="PipelineIdInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.pipelineIdInput"></a>

```go
func PipelineIdInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RowFilterInput`<sup>Optional</sup> <a name="RowFilterInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.rowFilterInput"></a>

```go
func RowFilterInput() DataDatabricksTableTableInfoRowFilter
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a>

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `SqlPathInput`<sup>Optional</sup> <a name="SqlPathInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.sqlPathInput"></a>

```go
func SqlPathInput() *string
```

- *Type:* *string

---

##### `StorageCredentialNameInput`<sup>Optional</sup> <a name="StorageCredentialNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageCredentialNameInput"></a>

```go
func StorageCredentialNameInput() *string
```

- *Type:* *string

---

##### `StorageLocationInput`<sup>Optional</sup> <a name="StorageLocationInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageLocationInput"></a>

```go
func StorageLocationInput() *string
```

- *Type:* *string

---

##### `TableConstraintsInput`<sup>Optional</sup> <a name="TableConstraintsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableConstraintsInput"></a>

```go
func TableConstraintsInput() interface{}
```

- *Type:* interface{}

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableIdInput"></a>

```go
func TableIdInput() *string
```

- *Type:* *string

---

##### `TableTypeInput`<sup>Optional</sup> <a name="TableTypeInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableTypeInput"></a>

```go
func TableTypeInput() *string
```

- *Type:* *string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedAtInput"></a>

```go
func UpdatedAtInput() *f64
```

- *Type:* *f64

---

##### `UpdatedByInput`<sup>Optional</sup> <a name="UpdatedByInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedByInput"></a>

```go
func UpdatedByInput() *string
```

- *Type:* *string

---

##### `ViewDefinitionInput`<sup>Optional</sup> <a name="ViewDefinitionInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDefinitionInput"></a>

```go
func ViewDefinitionInput() *string
```

- *Type:* *string

---

##### `ViewDependenciesInput`<sup>Optional</sup> <a name="ViewDependenciesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDependenciesInput"></a>

```go
func ViewDependenciesInput() DataDatabricksTableTableInfoViewDependencies
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a>

---

##### `AccessPoint`<sup>Required</sup> <a name="AccessPoint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.accessPoint"></a>

```go
func AccessPoint() *string
```

- *Type:* *string

---

##### `BrowseOnly`<sup>Required</sup> <a name="BrowseOnly" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.browseOnly"></a>

```go
func BrowseOnly() interface{}
```

- *Type:* interface{}

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DataAccessConfigurationId`<sup>Required</sup> <a name="DataAccessConfigurationId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataAccessConfigurationId"></a>

```go
func DataAccessConfigurationId() *string
```

- *Type:* *string

---

##### `DataSourceFormat`<sup>Required</sup> <a name="DataSourceFormat" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataSourceFormat"></a>

```go
func DataSourceFormat() *string
```

- *Type:* *string

---

##### `DeletedAt`<sup>Required</sup> <a name="DeletedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deletedAt"></a>

```go
func DeletedAt() *f64
```

- *Type:* *f64

---

##### `EnablePredictiveOptimization`<sup>Required</sup> <a name="EnablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.enablePredictiveOptimization"></a>

```go
func EnablePredictiveOptimization() *string
```

- *Type:* *string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SqlPath`<sup>Required</sup> <a name="SqlPath" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.sqlPath"></a>

```go
func SqlPath() *string
```

- *Type:* *string

---

##### `StorageCredentialName`<sup>Required</sup> <a name="StorageCredentialName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageCredentialName"></a>

```go
func StorageCredentialName() *string
```

- *Type:* *string

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageLocation"></a>

```go
func StorageLocation() *string
```

- *Type:* *string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

##### `TableType`<sup>Required</sup> <a name="TableType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableType"></a>

```go
func TableType() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *f64
```

- *Type:* *f64

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `ViewDefinition`<sup>Required</sup> <a name="ViewDefinition" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDefinition"></a>

```go
func ViewDefinition() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksTableTableInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a>

---


### DataDatabricksTableTableInfoRowFilterOutputReference <a name="DataDatabricksTableTableInfoRowFilterOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoRowFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksTableTableInfoRowFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.inputColumnNamesInput">InputColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.inputColumnNames">InputColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `InputColumnNamesInput`<sup>Optional</sup> <a name="InputColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.inputColumnNamesInput"></a>

```go
func InputColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `InputColumnNames`<sup>Required</sup> <a name="InputColumnNames" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.inputColumnNames"></a>

```go
func InputColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksTableTableInfoRowFilter
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a>

---


### DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference <a name="DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.childColumnsInput">ChildColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentColumnsInput">ParentColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentTableInput">ParentTableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.childColumns">ChildColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentColumns">ParentColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentTable">ParentTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChildColumnsInput`<sup>Optional</sup> <a name="ChildColumnsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.childColumnsInput"></a>

```go
func ChildColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentColumnsInput`<sup>Optional</sup> <a name="ParentColumnsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentColumnsInput"></a>

```go
func ParentColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ParentTableInput`<sup>Optional</sup> <a name="ParentTableInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentTableInput"></a>

```go
func ParentTableInput() *string
```

- *Type:* *string

---

##### `ChildColumns`<sup>Required</sup> <a name="ChildColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.childColumns"></a>

```go
func ChildColumns() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentColumns`<sup>Required</sup> <a name="ParentColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentColumns"></a>

```go
func ParentColumns() *[]*string
```

- *Type:* *[]*string

---

##### `ParentTable`<sup>Required</sup> <a name="ParentTable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentTable"></a>

```go
func ParentTable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a>

---


### DataDatabricksTableTableInfoTableConstraintsList <a name="DataDatabricksTableTableInfoTableConstraintsList" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoTableConstraintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksTableTableInfoTableConstraintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.get"></a>

```go
func Get(index *f64) DataDatabricksTableTableInfoTableConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference <a name="DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a>

---


### DataDatabricksTableTableInfoTableConstraintsOutputReference <a name="DataDatabricksTableTableInfoTableConstraintsOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoTableConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksTableTableInfoTableConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putForeignKeyConstraint">PutForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putNamedTableConstraint">PutNamedTableConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putPrimaryKeyConstraint">PutPrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resetForeignKeyConstraint">ResetForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resetNamedTableConstraint">ResetNamedTableConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resetPrimaryKeyConstraint">ResetPrimaryKeyConstraint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForeignKeyConstraint` <a name="PutForeignKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putForeignKeyConstraint"></a>

```go
func PutForeignKeyConstraint(value DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putForeignKeyConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a>

---

##### `PutNamedTableConstraint` <a name="PutNamedTableConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putNamedTableConstraint"></a>

```go
func PutNamedTableConstraint(value DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putNamedTableConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a>

---

##### `PutPrimaryKeyConstraint` <a name="PutPrimaryKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putPrimaryKeyConstraint"></a>

```go
func PutPrimaryKeyConstraint(value DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putPrimaryKeyConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a>

---

##### `ResetForeignKeyConstraint` <a name="ResetForeignKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resetForeignKeyConstraint"></a>

```go
func ResetForeignKeyConstraint()
```

##### `ResetNamedTableConstraint` <a name="ResetNamedTableConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resetNamedTableConstraint"></a>

```go
func ResetNamedTableConstraint()
```

##### `ResetPrimaryKeyConstraint` <a name="ResetPrimaryKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resetPrimaryKeyConstraint"></a>

```go
func ResetPrimaryKeyConstraint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.foreignKeyConstraint">ForeignKeyConstraint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.namedTableConstraint">NamedTableConstraint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.primaryKeyConstraint">PrimaryKeyConstraint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.foreignKeyConstraintInput">ForeignKeyConstraintInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.namedTableConstraintInput">NamedTableConstraintInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.primaryKeyConstraintInput">PrimaryKeyConstraintInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForeignKeyConstraint`<sup>Required</sup> <a name="ForeignKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.foreignKeyConstraint"></a>

```go
func ForeignKeyConstraint() DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference</a>

---

##### `NamedTableConstraint`<sup>Required</sup> <a name="NamedTableConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.namedTableConstraint"></a>

```go
func NamedTableConstraint() DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference</a>

---

##### `PrimaryKeyConstraint`<sup>Required</sup> <a name="PrimaryKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.primaryKeyConstraint"></a>

```go
func PrimaryKeyConstraint() DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference</a>

---

##### `ForeignKeyConstraintInput`<sup>Optional</sup> <a name="ForeignKeyConstraintInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.foreignKeyConstraintInput"></a>

```go
func ForeignKeyConstraintInput() DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a>

---

##### `NamedTableConstraintInput`<sup>Optional</sup> <a name="NamedTableConstraintInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.namedTableConstraintInput"></a>

```go
func NamedTableConstraintInput() DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a>

---

##### `PrimaryKeyConstraintInput`<sup>Optional</sup> <a name="PrimaryKeyConstraintInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.primaryKeyConstraintInput"></a>

```go
func PrimaryKeyConstraintInput() DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference <a name="DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resetTimeseriesColumns">ResetTimeseriesColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeseriesColumns` <a name="ResetTimeseriesColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resetTimeseriesColumns"></a>

```go
func ResetTimeseriesColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.childColumnsInput">ChildColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.timeseriesColumnsInput">TimeseriesColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.childColumns">ChildColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.timeseriesColumns">TimeseriesColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChildColumnsInput`<sup>Optional</sup> <a name="ChildColumnsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.childColumnsInput"></a>

```go
func ChildColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeseriesColumnsInput`<sup>Optional</sup> <a name="TimeseriesColumnsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.timeseriesColumnsInput"></a>

```go
func TimeseriesColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ChildColumns`<sup>Required</sup> <a name="ChildColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.childColumns"></a>

```go
func ChildColumns() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TimeseriesColumns`<sup>Required</sup> <a name="TimeseriesColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.timeseriesColumns"></a>

```go
func TimeseriesColumns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a>

---


### DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput">FunctionFullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.functionFullName">FunctionFullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionFullNameInput`<sup>Optional</sup> <a name="FunctionFullNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput"></a>

```go
func FunctionFullNameInput() *string
```

- *Type:* *string

---

##### `FunctionFullName`<sup>Required</sup> <a name="FunctionFullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.functionFullName"></a>

```go
func FunctionFullName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksTableTableInfoViewDependenciesDependenciesFunction
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a>

---


### DataDatabricksTableTableInfoViewDependenciesDependenciesList <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesList" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoViewDependenciesDependenciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksTableTableInfoViewDependenciesDependenciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.get"></a>

```go
func Get(index *f64) DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putFunction">PutFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putTable">PutTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetFunction">ResetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetTable">ResetTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFunction` <a name="PutFunction" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putFunction"></a>

```go
func PutFunction(value DataDatabricksTableTableInfoViewDependenciesDependenciesFunction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putFunction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a>

---

##### `PutTable` <a name="PutTable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putTable"></a>

```go
func PutTable(value DataDatabricksTableTableInfoViewDependenciesDependenciesTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a>

---

##### `ResetFunction` <a name="ResetFunction" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetFunction"></a>

```go
func ResetFunction()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetTable"></a>

```go
func ResetTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.function">Function</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.table">Table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.functionInput">FunctionInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.tableInput">TableInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.function"></a>

```go
func Function() DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference</a>

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.table"></a>

```go
func Table() DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference</a>

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.functionInput"></a>

```go
func FunctionInput() DataDatabricksTableTableInfoViewDependenciesDependenciesFunction
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a>

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.tableInput"></a>

```go
func TableInput() DataDatabricksTableTableInfoViewDependenciesDependenciesTable
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.tableFullNameInput">TableFullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.tableFullName">TableFullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TableFullNameInput`<sup>Optional</sup> <a name="TableFullNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.tableFullNameInput"></a>

```go
func TableFullNameInput() *string
```

- *Type:* *string

---

##### `TableFullName`<sup>Required</sup> <a name="TableFullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.tableFullName"></a>

```go
func TableFullName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksTableTableInfoViewDependenciesDependenciesTable
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a>

---


### DataDatabricksTableTableInfoViewDependenciesOutputReference <a name="DataDatabricksTableTableInfoViewDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickstable"

datadatabrickstable.NewDataDatabricksTableTableInfoViewDependenciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksTableTableInfoViewDependenciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.putDependencies">PutDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.resetDependencies">ResetDependencies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDependencies` <a name="PutDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.putDependencies"></a>

```go
func PutDependencies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.putDependencies.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDependencies` <a name="ResetDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.resetDependencies"></a>

```go
func ResetDependencies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.dependencies">Dependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList">DataDatabricksTableTableInfoViewDependenciesDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.dependenciesInput">DependenciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.dependencies"></a>

```go
func Dependencies() DataDatabricksTableTableInfoViewDependenciesDependenciesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList">DataDatabricksTableTableInfoViewDependenciesDependenciesList</a>

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.dependenciesInput"></a>

```go
func DependenciesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksTableTableInfoViewDependencies
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a>

---



