# `dataDatabricksDatabaseInstances` Submodule <a name="`dataDatabricksDatabaseInstances` Submodule" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseInstances <a name="DataDatabricksDatabaseInstances" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances databricks_database_instances}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstances"

datadatabricksdatabaseinstances.NewDataDatabricksDatabaseInstances(scope Construct, id *string, config DataDatabricksDatabaseInstancesConfig) DataDatabricksDatabaseInstances
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig">DataDatabricksDatabaseInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig">DataDatabricksDatabaseInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDatabaseInstances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstances"

datadatabricksdatabaseinstances.DataDatabricksDatabaseInstances_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstances"

datadatabricksdatabaseinstances.DataDatabricksDatabaseInstances_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstances"

datadatabricksdatabaseinstances.DataDatabricksDatabaseInstances_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstances"

datadatabricksdatabaseinstances.DataDatabricksDatabaseInstances_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksDatabaseInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksDatabaseInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksDatabaseInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.databaseInstances">DatabaseInstances</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList">DataDatabricksDatabaseInstancesDatabaseInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DatabaseInstances`<sup>Required</sup> <a name="DatabaseInstances" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.databaseInstances"></a>

```go
func DatabaseInstances() DataDatabricksDatabaseInstancesDatabaseInstancesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList">DataDatabricksDatabaseInstancesDatabaseInstancesList</a>

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseInstancesConfig <a name="DataDatabricksDatabaseInstancesConfig" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstances"

&datadatabricksdatabaseinstances.DataDatabricksDatabaseInstancesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#workspace_id DataDatabricksDatabaseInstances#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#workspace_id DataDatabricksDatabaseInstances#workspace_id}.

---

### DataDatabricksDatabaseInstancesDatabaseInstances <a name="DataDatabricksDatabaseInstancesDatabaseInstances" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstances"

&datadatabricksdatabaseinstances.DataDatabricksDatabaseInstancesDatabaseInstances {
	Name: *string,
	Capacity: *string,
	EnablePgNativeLogin: interface{},
	EnableReadableSecondaries: interface{},
	NodeCount: *f64,
	ParentInstanceRef: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef,
	RetentionWindowInDays: *f64,
	Stopped: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.capacity">Capacity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#capacity DataDatabricksDatabaseInstances#capacity}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.enablePgNativeLogin">EnablePgNativeLogin</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#enable_pg_native_login DataDatabricksDatabaseInstances#enable_pg_native_login}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.enableReadableSecondaries">EnableReadableSecondaries</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#enable_readable_secondaries DataDatabricksDatabaseInstances#enable_readable_secondaries}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#node_count DataDatabricksDatabaseInstances#node_count}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.parentInstanceRef">ParentInstanceRef</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef">DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#parent_instance_ref DataDatabricksDatabaseInstances#parent_instance_ref}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.retentionWindowInDays">RetentionWindowInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#retention_window_in_days DataDatabricksDatabaseInstances#retention_window_in_days}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.stopped">Stopped</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#stopped DataDatabricksDatabaseInstances#stopped}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}.

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.capacity"></a>

```go
Capacity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#capacity DataDatabricksDatabaseInstances#capacity}.

---

##### `EnablePgNativeLogin`<sup>Optional</sup> <a name="EnablePgNativeLogin" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.enablePgNativeLogin"></a>

```go
EnablePgNativeLogin interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#enable_pg_native_login DataDatabricksDatabaseInstances#enable_pg_native_login}.

---

##### `EnableReadableSecondaries`<sup>Optional</sup> <a name="EnableReadableSecondaries" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.enableReadableSecondaries"></a>

```go
EnableReadableSecondaries interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#enable_readable_secondaries DataDatabricksDatabaseInstances#enable_readable_secondaries}.

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#node_count DataDatabricksDatabaseInstances#node_count}.

---

##### `ParentInstanceRef`<sup>Optional</sup> <a name="ParentInstanceRef" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.parentInstanceRef"></a>

```go
ParentInstanceRef DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef">DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#parent_instance_ref DataDatabricksDatabaseInstances#parent_instance_ref}.

---

##### `RetentionWindowInDays`<sup>Optional</sup> <a name="RetentionWindowInDays" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.retentionWindowInDays"></a>

```go
RetentionWindowInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#retention_window_in_days DataDatabricksDatabaseInstances#retention_window_in_days}.

---

##### `Stopped`<sup>Optional</sup> <a name="Stopped" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.stopped"></a>

```go
Stopped interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#stopped DataDatabricksDatabaseInstances#stopped}.

---

### DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs <a name="DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstances"

&datadatabricksdatabaseinstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs {
	BranchTime: *string,
	Lsn: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.branchTime">BranchTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.lsn">Lsn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}. |

---

##### `BranchTime`<sup>Optional</sup> <a name="BranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.branchTime"></a>

```go
BranchTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}.

---

##### `Lsn`<sup>Optional</sup> <a name="Lsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.lsn"></a>

```go
Lsn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}.

---

### DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef <a name="DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstances"

&datadatabricksdatabaseinstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef {
	BranchTime: *string,
	Lsn: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.branchTime">BranchTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.lsn">Lsn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}. |

---

##### `BranchTime`<sup>Optional</sup> <a name="BranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.branchTime"></a>

```go
BranchTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}.

---

##### `Lsn`<sup>Optional</sup> <a name="Lsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.lsn"></a>

```go
Lsn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList <a name="DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstances"

datadatabricksdatabaseinstances.NewDataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.get"></a>

```go
func Get(index *f64) DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstances"

datadatabricksdatabaseinstances.NewDataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetBranchTime">ResetBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetLsn">ResetLsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchTime` <a name="ResetBranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetBranchTime"></a>

```go
func ResetBranchTime()
```

##### `ResetLsn` <a name="ResetLsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetLsn"></a>

```go
func ResetLsn()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.effectiveLsn">EffectiveLsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.branchTimeInput">BranchTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.lsnInput">LsnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.branchTime">BranchTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.lsn">Lsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveLsn`<sup>Required</sup> <a name="EffectiveLsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.effectiveLsn"></a>

```go
func EffectiveLsn() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `BranchTimeInput`<sup>Optional</sup> <a name="BranchTimeInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.branchTimeInput"></a>

```go
func BranchTimeInput() *string
```

- *Type:* *string

---

##### `LsnInput`<sup>Optional</sup> <a name="LsnInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.lsnInput"></a>

```go
func LsnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `BranchTime`<sup>Required</sup> <a name="BranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.branchTime"></a>

```go
func BranchTime() *string
```

- *Type:* *string

---

##### `Lsn`<sup>Required</sup> <a name="Lsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.lsn"></a>

```go
func Lsn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs</a>

---


### DataDatabricksDatabaseInstancesDatabaseInstancesList <a name="DataDatabricksDatabaseInstancesDatabaseInstancesList" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstances"

datadatabricksdatabaseinstances.NewDataDatabricksDatabaseInstancesDatabaseInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksDatabaseInstancesDatabaseInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.get"></a>

```go
func Get(index *f64) DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstances"

datadatabricksdatabaseinstances.NewDataDatabricksDatabaseInstancesDatabaseInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.putParentInstanceRef">PutParentInstanceRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resetEnablePgNativeLogin">ResetEnablePgNativeLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resetEnableReadableSecondaries">ResetEnableReadableSecondaries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resetParentInstanceRef">ResetParentInstanceRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resetRetentionWindowInDays">ResetRetentionWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resetStopped">ResetStopped</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParentInstanceRef` <a name="PutParentInstanceRef" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.putParentInstanceRef"></a>

```go
func PutParentInstanceRef(value DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.putParentInstanceRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef">DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef</a>

---

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resetCapacity"></a>

```go
func ResetCapacity()
```

##### `ResetEnablePgNativeLogin` <a name="ResetEnablePgNativeLogin" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resetEnablePgNativeLogin"></a>

```go
func ResetEnablePgNativeLogin()
```

##### `ResetEnableReadableSecondaries` <a name="ResetEnableReadableSecondaries" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resetEnableReadableSecondaries"></a>

```go
func ResetEnableReadableSecondaries()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resetNodeCount"></a>

```go
func ResetNodeCount()
```

##### `ResetParentInstanceRef` <a name="ResetParentInstanceRef" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resetParentInstanceRef"></a>

```go
func ResetParentInstanceRef()
```

##### `ResetRetentionWindowInDays` <a name="ResetRetentionWindowInDays" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resetRetentionWindowInDays"></a>

```go
func ResetRetentionWindowInDays()
```

##### `ResetStopped` <a name="ResetStopped" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resetStopped"></a>

```go
func ResetStopped()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.childInstanceRefs">ChildInstanceRefs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveEnablePgNativeLogin">EffectiveEnablePgNativeLogin</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveEnableReadableSecondaries">EffectiveEnableReadableSecondaries</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveNodeCount">EffectiveNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveRetentionWindowInDays">EffectiveRetentionWindowInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveStopped">EffectiveStopped</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.parentInstanceRef">ParentInstanceRef</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference">DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.pgVersion">PgVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.readOnlyDns">ReadOnlyDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.readWriteDns">ReadWriteDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.capacityInput">CapacityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enablePgNativeLoginInput">EnablePgNativeLoginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enableReadableSecondariesInput">EnableReadableSecondariesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.parentInstanceRefInput">ParentInstanceRefInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.retentionWindowInDaysInput">RetentionWindowInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.stoppedInput">StoppedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.capacity">Capacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enablePgNativeLogin">EnablePgNativeLogin</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enableReadableSecondaries">EnableReadableSecondaries</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.retentionWindowInDays">RetentionWindowInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.stopped">Stopped</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances">DataDatabricksDatabaseInstancesDatabaseInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChildInstanceRefs`<sup>Required</sup> <a name="ChildInstanceRefs" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.childInstanceRefs"></a>

```go
func ChildInstanceRefs() DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `EffectiveEnablePgNativeLogin`<sup>Required</sup> <a name="EffectiveEnablePgNativeLogin" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveEnablePgNativeLogin"></a>

```go
func EffectiveEnablePgNativeLogin() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EffectiveEnableReadableSecondaries`<sup>Required</sup> <a name="EffectiveEnableReadableSecondaries" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveEnableReadableSecondaries"></a>

```go
func EffectiveEnableReadableSecondaries() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EffectiveNodeCount`<sup>Required</sup> <a name="EffectiveNodeCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveNodeCount"></a>

```go
func EffectiveNodeCount() *f64
```

- *Type:* *f64

---

##### `EffectiveRetentionWindowInDays`<sup>Required</sup> <a name="EffectiveRetentionWindowInDays" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveRetentionWindowInDays"></a>

```go
func EffectiveRetentionWindowInDays() *f64
```

- *Type:* *f64

---

##### `EffectiveStopped`<sup>Required</sup> <a name="EffectiveStopped" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveStopped"></a>

```go
func EffectiveStopped() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ParentInstanceRef`<sup>Required</sup> <a name="ParentInstanceRef" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.parentInstanceRef"></a>

```go
func ParentInstanceRef() DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference">DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference</a>

---

##### `PgVersion`<sup>Required</sup> <a name="PgVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.pgVersion"></a>

```go
func PgVersion() *string
```

- *Type:* *string

---

##### `ReadOnlyDns`<sup>Required</sup> <a name="ReadOnlyDns" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.readOnlyDns"></a>

```go
func ReadOnlyDns() *string
```

- *Type:* *string

---

##### `ReadWriteDns`<sup>Required</sup> <a name="ReadWriteDns" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.readWriteDns"></a>

```go
func ReadWriteDns() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.capacityInput"></a>

```go
func CapacityInput() *string
```

- *Type:* *string

---

##### `EnablePgNativeLoginInput`<sup>Optional</sup> <a name="EnablePgNativeLoginInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enablePgNativeLoginInput"></a>

```go
func EnablePgNativeLoginInput() interface{}
```

- *Type:* interface{}

---

##### `EnableReadableSecondariesInput`<sup>Optional</sup> <a name="EnableReadableSecondariesInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enableReadableSecondariesInput"></a>

```go
func EnableReadableSecondariesInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `ParentInstanceRefInput`<sup>Optional</sup> <a name="ParentInstanceRefInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.parentInstanceRefInput"></a>

```go
func ParentInstanceRefInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionWindowInDaysInput`<sup>Optional</sup> <a name="RetentionWindowInDaysInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.retentionWindowInDaysInput"></a>

```go
func RetentionWindowInDaysInput() *f64
```

- *Type:* *f64

---

##### `StoppedInput`<sup>Optional</sup> <a name="StoppedInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.stoppedInput"></a>

```go
func StoppedInput() interface{}
```

- *Type:* interface{}

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.capacity"></a>

```go
func Capacity() *string
```

- *Type:* *string

---

##### `EnablePgNativeLogin`<sup>Required</sup> <a name="EnablePgNativeLogin" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enablePgNativeLogin"></a>

```go
func EnablePgNativeLogin() interface{}
```

- *Type:* interface{}

---

##### `EnableReadableSecondaries`<sup>Required</sup> <a name="EnableReadableSecondaries" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enableReadableSecondaries"></a>

```go
func EnableReadableSecondaries() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `RetentionWindowInDays`<sup>Required</sup> <a name="RetentionWindowInDays" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.retentionWindowInDays"></a>

```go
func RetentionWindowInDays() *f64
```

- *Type:* *f64

---

##### `Stopped`<sup>Required</sup> <a name="Stopped" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.stopped"></a>

```go
func Stopped() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDatabaseInstancesDatabaseInstances
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances">DataDatabricksDatabaseInstancesDatabaseInstances</a>

---


### DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabaseinstances"

datadatabricksdatabaseinstances.NewDataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetBranchTime">ResetBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetLsn">ResetLsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchTime` <a name="ResetBranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetBranchTime"></a>

```go
func ResetBranchTime()
```

##### `ResetLsn` <a name="ResetLsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetLsn"></a>

```go
func ResetLsn()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.effectiveLsn">EffectiveLsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.branchTimeInput">BranchTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.lsnInput">LsnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.branchTime">BranchTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.lsn">Lsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveLsn`<sup>Required</sup> <a name="EffectiveLsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.effectiveLsn"></a>

```go
func EffectiveLsn() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `BranchTimeInput`<sup>Optional</sup> <a name="BranchTimeInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.branchTimeInput"></a>

```go
func BranchTimeInput() *string
```

- *Type:* *string

---

##### `LsnInput`<sup>Optional</sup> <a name="LsnInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.lsnInput"></a>

```go
func LsnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `BranchTime`<sup>Required</sup> <a name="BranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.branchTime"></a>

```go
func BranchTime() *string
```

- *Type:* *string

---

##### `Lsn`<sup>Required</sup> <a name="Lsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.lsn"></a>

```go
func Lsn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



