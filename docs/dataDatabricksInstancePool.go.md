# `dataDatabricksInstancePool` Submodule <a name="`dataDatabricksInstancePool` Submodule" id="@cdktf/provider-databricks.dataDatabricksInstancePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksInstancePool <a name="DataDatabricksInstancePool" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool databricks_instance_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.NewDataDatabricksInstancePool(scope Construct, id *string, config DataDatabricksInstancePoolConfig) DataDatabricksInstancePool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig">DataDatabricksInstancePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig">DataDatabricksInstancePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.putPoolInfo">PutPoolInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.resetPoolInfo">ResetPoolInfo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPoolInfo` <a name="PutPoolInfo" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.putPoolInfo"></a>

```go
func PutPoolInfo(value DataDatabricksInstancePoolPoolInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.putPoolInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo">DataDatabricksInstancePoolPoolInfo</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.resetId"></a>

```go
func ResetId()
```

##### `ResetPoolInfo` <a name="ResetPoolInfo" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.resetPoolInfo"></a>

```go
func ResetPoolInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksInstancePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.DataDatabricksInstancePool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.DataDatabricksInstancePool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.DataDatabricksInstancePool_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.DataDatabricksInstancePool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksInstancePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksInstancePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksInstancePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksInstancePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.poolInfo">PoolInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference">DataDatabricksInstancePoolPoolInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.poolInfoInput">PoolInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo">DataDatabricksInstancePoolPoolInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `PoolInfo`<sup>Required</sup> <a name="PoolInfo" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.poolInfo"></a>

```go
func PoolInfo() DataDatabricksInstancePoolPoolInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference">DataDatabricksInstancePoolPoolInfoOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PoolInfoInput`<sup>Optional</sup> <a name="PoolInfoInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.poolInfoInput"></a>

```go
func PoolInfoInput() DataDatabricksInstancePoolPoolInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo">DataDatabricksInstancePoolPoolInfo</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksInstancePoolConfig <a name="DataDatabricksInstancePoolConfig" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

&datadatabricksinstancepool.DataDatabricksInstancePoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	PoolInfo: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#name DataDatabricksInstancePool#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#id DataDatabricksInstancePool#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.poolInfo">PoolInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo">DataDatabricksInstancePoolPoolInfo</a></code> | pool_info block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#name DataDatabricksInstancePool#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#id DataDatabricksInstancePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PoolInfo`<sup>Optional</sup> <a name="PoolInfo" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.poolInfo"></a>

```go
PoolInfo DataDatabricksInstancePoolPoolInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo">DataDatabricksInstancePoolPoolInfo</a>

pool_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#pool_info DataDatabricksInstancePool#pool_info}

---

### DataDatabricksInstancePoolPoolInfo <a name="DataDatabricksInstancePoolPoolInfo" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

&datadatabricksinstancepool.DataDatabricksInstancePoolPoolInfo {
	IdleInstanceAutoterminationMinutes: *f64,
	InstancePoolName: *string,
	AwsAttributes: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes,
	AzureAttributes: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes,
	CustomTags: *map[string]*string,
	DefaultTags: *map[string]*string,
	DiskSpec: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec,
	EnableElasticDisk: interface{},
	GcpAttributes: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes,
	InstancePoolFleetAttributes: interface{},
	InstancePoolId: *string,
	MaxCapacity: *f64,
	MinIdleInstances: *f64,
	NodeTypeId: *string,
	PreloadedDockerImage: interface{},
	PreloadedSparkVersions: *[]*string,
	State: *string,
	Stats: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.idleInstanceAutoterminationMinutes">IdleInstanceAutoterminationMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#idle_instance_autotermination_minutes DataDatabricksInstancePool#idle_instance_autotermination_minutes}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.instancePoolName">InstancePoolName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#instance_pool_name DataDatabricksInstancePool#instance_pool_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.awsAttributes">AwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes">DataDatabricksInstancePoolPoolInfoAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.azureAttributes">AzureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes">DataDatabricksInstancePoolPoolInfoAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.customTags">CustomTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#custom_tags DataDatabricksInstancePool#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.defaultTags">DefaultTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#default_tags DataDatabricksInstancePool#default_tags}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.diskSpec">DiskSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec">DataDatabricksInstancePoolPoolInfoDiskSpec</a></code> | disk_spec block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.enableElasticDisk">EnableElasticDisk</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#enable_elastic_disk DataDatabricksInstancePool#enable_elastic_disk}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.gcpAttributes">GcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes">DataDatabricksInstancePoolPoolInfoGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.instancePoolFleetAttributes">InstancePoolFleetAttributes</a></code> | <code>interface{}</code> | instance_pool_fleet_attributes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.instancePoolId">InstancePoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#instance_pool_id DataDatabricksInstancePool#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#max_capacity DataDatabricksInstancePool#max_capacity}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.minIdleInstances">MinIdleInstances</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#min_idle_instances DataDatabricksInstancePool#min_idle_instances}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.nodeTypeId">NodeTypeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#node_type_id DataDatabricksInstancePool#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.preloadedDockerImage">PreloadedDockerImage</a></code> | <code>interface{}</code> | preloaded_docker_image block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.preloadedSparkVersions">PreloadedSparkVersions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#preloaded_spark_versions DataDatabricksInstancePool#preloaded_spark_versions}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#state DataDatabricksInstancePool#state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.stats">Stats</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats">DataDatabricksInstancePoolPoolInfoStats</a></code> | stats block. |

---

##### `IdleInstanceAutoterminationMinutes`<sup>Required</sup> <a name="IdleInstanceAutoterminationMinutes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.idleInstanceAutoterminationMinutes"></a>

```go
IdleInstanceAutoterminationMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#idle_instance_autotermination_minutes DataDatabricksInstancePool#idle_instance_autotermination_minutes}.

---

##### `InstancePoolName`<sup>Required</sup> <a name="InstancePoolName" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.instancePoolName"></a>

```go
InstancePoolName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#instance_pool_name DataDatabricksInstancePool#instance_pool_name}.

---

##### `AwsAttributes`<sup>Optional</sup> <a name="AwsAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.awsAttributes"></a>

```go
AwsAttributes DataDatabricksInstancePoolPoolInfoAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes">DataDatabricksInstancePoolPoolInfoAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#aws_attributes DataDatabricksInstancePool#aws_attributes}

---

##### `AzureAttributes`<sup>Optional</sup> <a name="AzureAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.azureAttributes"></a>

```go
AzureAttributes DataDatabricksInstancePoolPoolInfoAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes">DataDatabricksInstancePoolPoolInfoAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#azure_attributes DataDatabricksInstancePool#azure_attributes}

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.customTags"></a>

```go
CustomTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#custom_tags DataDatabricksInstancePool#custom_tags}.

---

##### `DefaultTags`<sup>Optional</sup> <a name="DefaultTags" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.defaultTags"></a>

```go
DefaultTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#default_tags DataDatabricksInstancePool#default_tags}.

---

##### `DiskSpec`<sup>Optional</sup> <a name="DiskSpec" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.diskSpec"></a>

```go
DiskSpec DataDatabricksInstancePoolPoolInfoDiskSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec">DataDatabricksInstancePoolPoolInfoDiskSpec</a>

disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#disk_spec DataDatabricksInstancePool#disk_spec}

---

##### `EnableElasticDisk`<sup>Optional</sup> <a name="EnableElasticDisk" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.enableElasticDisk"></a>

```go
EnableElasticDisk interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#enable_elastic_disk DataDatabricksInstancePool#enable_elastic_disk}.

---

##### `GcpAttributes`<sup>Optional</sup> <a name="GcpAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.gcpAttributes"></a>

```go
GcpAttributes DataDatabricksInstancePoolPoolInfoGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes">DataDatabricksInstancePoolPoolInfoGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#gcp_attributes DataDatabricksInstancePool#gcp_attributes}

---

##### `InstancePoolFleetAttributes`<sup>Optional</sup> <a name="InstancePoolFleetAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.instancePoolFleetAttributes"></a>

```go
InstancePoolFleetAttributes interface{}
```

- *Type:* interface{}

instance_pool_fleet_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#instance_pool_fleet_attributes DataDatabricksInstancePool#instance_pool_fleet_attributes}

---

##### `InstancePoolId`<sup>Optional</sup> <a name="InstancePoolId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.instancePoolId"></a>

```go
InstancePoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#instance_pool_id DataDatabricksInstancePool#instance_pool_id}.

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.maxCapacity"></a>

```go
MaxCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#max_capacity DataDatabricksInstancePool#max_capacity}.

---

##### `MinIdleInstances`<sup>Optional</sup> <a name="MinIdleInstances" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.minIdleInstances"></a>

```go
MinIdleInstances *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#min_idle_instances DataDatabricksInstancePool#min_idle_instances}.

---

##### `NodeTypeId`<sup>Optional</sup> <a name="NodeTypeId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.nodeTypeId"></a>

```go
NodeTypeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#node_type_id DataDatabricksInstancePool#node_type_id}.

---

##### `PreloadedDockerImage`<sup>Optional</sup> <a name="PreloadedDockerImage" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.preloadedDockerImage"></a>

```go
PreloadedDockerImage interface{}
```

- *Type:* interface{}

preloaded_docker_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#preloaded_docker_image DataDatabricksInstancePool#preloaded_docker_image}

---

##### `PreloadedSparkVersions`<sup>Optional</sup> <a name="PreloadedSparkVersions" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.preloadedSparkVersions"></a>

```go
PreloadedSparkVersions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#preloaded_spark_versions DataDatabricksInstancePool#preloaded_spark_versions}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#state DataDatabricksInstancePool#state}.

---

##### `Stats`<sup>Optional</sup> <a name="Stats" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.stats"></a>

```go
Stats DataDatabricksInstancePoolPoolInfoStats
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats">DataDatabricksInstancePoolPoolInfoStats</a>

stats block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#stats DataDatabricksInstancePool#stats}

---

### DataDatabricksInstancePoolPoolInfoAwsAttributes <a name="DataDatabricksInstancePoolPoolInfoAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

&datadatabricksinstancepool.DataDatabricksInstancePoolPoolInfoAwsAttributes {
	Availability: *string,
	InstanceProfileArn: *string,
	SpotBidPricePercent: *f64,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes.property.availability">Availability</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#availability DataDatabricksInstancePool#availability}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#instance_profile_arn DataDatabricksInstancePool#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes.property.spotBidPricePercent">SpotBidPricePercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#spot_bid_price_percent DataDatabricksInstancePool#spot_bid_price_percent}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes.property.zoneId">ZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#zone_id DataDatabricksInstancePool#zone_id}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes.property.availability"></a>

```go
Availability *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#availability DataDatabricksInstancePool#availability}.

---

##### `InstanceProfileArn`<sup>Optional</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes.property.instanceProfileArn"></a>

```go
InstanceProfileArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#instance_profile_arn DataDatabricksInstancePool#instance_profile_arn}.

---

##### `SpotBidPricePercent`<sup>Optional</sup> <a name="SpotBidPricePercent" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes.property.spotBidPricePercent"></a>

```go
SpotBidPricePercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#spot_bid_price_percent DataDatabricksInstancePool#spot_bid_price_percent}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#zone_id DataDatabricksInstancePool#zone_id}.

---

### DataDatabricksInstancePoolPoolInfoAzureAttributes <a name="DataDatabricksInstancePoolPoolInfoAzureAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

&datadatabricksinstancepool.DataDatabricksInstancePoolPoolInfoAzureAttributes {
	Availability: *string,
	SpotBidMaxPrice: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes.property.availability">Availability</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#availability DataDatabricksInstancePool#availability}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes.property.spotBidMaxPrice">SpotBidMaxPrice</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#spot_bid_max_price DataDatabricksInstancePool#spot_bid_max_price}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes.property.availability"></a>

```go
Availability *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#availability DataDatabricksInstancePool#availability}.

---

##### `SpotBidMaxPrice`<sup>Optional</sup> <a name="SpotBidMaxPrice" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes.property.spotBidMaxPrice"></a>

```go
SpotBidMaxPrice *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#spot_bid_max_price DataDatabricksInstancePool#spot_bid_max_price}.

---

### DataDatabricksInstancePoolPoolInfoDiskSpec <a name="DataDatabricksInstancePoolPoolInfoDiskSpec" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

&datadatabricksinstancepool.DataDatabricksInstancePoolPoolInfoDiskSpec {
	DiskCount: *f64,
	DiskSize: *f64,
	DiskType: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec.property.diskCount">DiskCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#disk_count DataDatabricksInstancePool#disk_count}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec.property.diskSize">DiskSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#disk_size DataDatabricksInstancePool#disk_size}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec.property.diskType">DiskType</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType">DataDatabricksInstancePoolPoolInfoDiskSpecDiskType</a></code> | disk_type block. |

---

##### `DiskCount`<sup>Optional</sup> <a name="DiskCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec.property.diskCount"></a>

```go
DiskCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#disk_count DataDatabricksInstancePool#disk_count}.

---

##### `DiskSize`<sup>Optional</sup> <a name="DiskSize" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec.property.diskSize"></a>

```go
DiskSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#disk_size DataDatabricksInstancePool#disk_size}.

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec.property.diskType"></a>

```go
DiskType DataDatabricksInstancePoolPoolInfoDiskSpecDiskType
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType">DataDatabricksInstancePoolPoolInfoDiskSpecDiskType</a>

disk_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#disk_type DataDatabricksInstancePool#disk_type}

---

### DataDatabricksInstancePoolPoolInfoDiskSpecDiskType <a name="DataDatabricksInstancePoolPoolInfoDiskSpecDiskType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

&datadatabricksinstancepool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType {
	AzureDiskVolumeType: *string,
	EbsVolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType.property.azureDiskVolumeType">AzureDiskVolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#azure_disk_volume_type DataDatabricksInstancePool#azure_disk_volume_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType.property.ebsVolumeType">EbsVolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#ebs_volume_type DataDatabricksInstancePool#ebs_volume_type}. |

---

##### `AzureDiskVolumeType`<sup>Optional</sup> <a name="AzureDiskVolumeType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType.property.azureDiskVolumeType"></a>

```go
AzureDiskVolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#azure_disk_volume_type DataDatabricksInstancePool#azure_disk_volume_type}.

---

##### `EbsVolumeType`<sup>Optional</sup> <a name="EbsVolumeType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType.property.ebsVolumeType"></a>

```go
EbsVolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#ebs_volume_type DataDatabricksInstancePool#ebs_volume_type}.

---

### DataDatabricksInstancePoolPoolInfoGcpAttributes <a name="DataDatabricksInstancePoolPoolInfoGcpAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

&datadatabricksinstancepool.DataDatabricksInstancePoolPoolInfoGcpAttributes {
	GcpAvailability: *string,
	LocalSsdCount: *f64,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes.property.gcpAvailability">GcpAvailability</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#gcp_availability DataDatabricksInstancePool#gcp_availability}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes.property.localSsdCount">LocalSsdCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#local_ssd_count DataDatabricksInstancePool#local_ssd_count}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes.property.zoneId">ZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#zone_id DataDatabricksInstancePool#zone_id}. |

---

##### `GcpAvailability`<sup>Optional</sup> <a name="GcpAvailability" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes.property.gcpAvailability"></a>

```go
GcpAvailability *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#gcp_availability DataDatabricksInstancePool#gcp_availability}.

---

##### `LocalSsdCount`<sup>Optional</sup> <a name="LocalSsdCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes.property.localSsdCount"></a>

```go
LocalSsdCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#local_ssd_count DataDatabricksInstancePool#local_ssd_count}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#zone_id DataDatabricksInstancePool#zone_id}.

---

### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

&datadatabricksinstancepool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes {
	LaunchTemplateOverride: interface{},
	FleetOnDemandOption: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption,
	FleetSpotOption: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes.property.launchTemplateOverride">LaunchTemplateOverride</a></code> | <code>interface{}</code> | launch_template_override block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes.property.fleetOnDemandOption">FleetOnDemandOption</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption</a></code> | fleet_on_demand_option block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes.property.fleetSpotOption">FleetSpotOption</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption</a></code> | fleet_spot_option block. |

---

##### `LaunchTemplateOverride`<sup>Required</sup> <a name="LaunchTemplateOverride" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes.property.launchTemplateOverride"></a>

```go
LaunchTemplateOverride interface{}
```

- *Type:* interface{}

launch_template_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#launch_template_override DataDatabricksInstancePool#launch_template_override}

---

##### `FleetOnDemandOption`<sup>Optional</sup> <a name="FleetOnDemandOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes.property.fleetOnDemandOption"></a>

```go
FleetOnDemandOption DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption</a>

fleet_on_demand_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#fleet_on_demand_option DataDatabricksInstancePool#fleet_on_demand_option}

---

##### `FleetSpotOption`<sup>Optional</sup> <a name="FleetSpotOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes.property.fleetSpotOption"></a>

```go
FleetSpotOption DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption</a>

fleet_spot_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#fleet_spot_option DataDatabricksInstancePool#fleet_spot_option}

---

### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

&datadatabricksinstancepool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption {
	AllocationStrategy: *string,
	InstancePoolsToUseCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#allocation_strategy DataDatabricksInstancePool#allocation_strategy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#instance_pools_to_use_count DataDatabricksInstancePool#instance_pools_to_use_count}. |

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption.property.allocationStrategy"></a>

```go
AllocationStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#allocation_strategy DataDatabricksInstancePool#allocation_strategy}.

---

##### `InstancePoolsToUseCount`<sup>Optional</sup> <a name="InstancePoolsToUseCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption.property.instancePoolsToUseCount"></a>

```go
InstancePoolsToUseCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#instance_pools_to_use_count DataDatabricksInstancePool#instance_pools_to_use_count}.

---

### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

&datadatabricksinstancepool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption {
	AllocationStrategy: *string,
	InstancePoolsToUseCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#allocation_strategy DataDatabricksInstancePool#allocation_strategy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#instance_pools_to_use_count DataDatabricksInstancePool#instance_pools_to_use_count}. |

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption.property.allocationStrategy"></a>

```go
AllocationStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#allocation_strategy DataDatabricksInstancePool#allocation_strategy}.

---

##### `InstancePoolsToUseCount`<sup>Optional</sup> <a name="InstancePoolsToUseCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption.property.instancePoolsToUseCount"></a>

```go
InstancePoolsToUseCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#instance_pools_to_use_count DataDatabricksInstancePool#instance_pools_to_use_count}.

---

### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

&datadatabricksinstancepool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride {
	AvailabilityZone: *string,
	InstanceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#availability_zone DataDatabricksInstancePool#availability_zone}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#instance_type DataDatabricksInstancePool#instance_type}. |

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#availability_zone DataDatabricksInstancePool#availability_zone}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#instance_type DataDatabricksInstancePool#instance_type}.

---

### DataDatabricksInstancePoolPoolInfoPreloadedDockerImage <a name="DataDatabricksInstancePoolPoolInfoPreloadedDockerImage" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

&datadatabricksinstancepool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImage {
	Url: *string,
	BasicAuth: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImage.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#url DataDatabricksInstancePool#url}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImage.property.basicAuth">BasicAuth</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth</a></code> | basic_auth block. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImage.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#url DataDatabricksInstancePool#url}.

---

##### `BasicAuth`<sup>Optional</sup> <a name="BasicAuth" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImage.property.basicAuth"></a>

```go
BasicAuth DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#basic_auth DataDatabricksInstancePool#basic_auth}

---

### DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth <a name="DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

&datadatabricksinstancepool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth {
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#password DataDatabricksInstancePool#password}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#username DataDatabricksInstancePool#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#password DataDatabricksInstancePool#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#username DataDatabricksInstancePool#username}.

---

### DataDatabricksInstancePoolPoolInfoStats <a name="DataDatabricksInstancePoolPoolInfoStats" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

&datadatabricksinstancepool.DataDatabricksInstancePoolPoolInfoStats {
	IdleCount: *f64,
	PendingIdleCount: *f64,
	PendingUsedCount: *f64,
	UsedCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats.property.idleCount">IdleCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#idle_count DataDatabricksInstancePool#idle_count}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats.property.pendingIdleCount">PendingIdleCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#pending_idle_count DataDatabricksInstancePool#pending_idle_count}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats.property.pendingUsedCount">PendingUsedCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#pending_used_count DataDatabricksInstancePool#pending_used_count}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats.property.usedCount">UsedCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#used_count DataDatabricksInstancePool#used_count}. |

---

##### `IdleCount`<sup>Optional</sup> <a name="IdleCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats.property.idleCount"></a>

```go
IdleCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#idle_count DataDatabricksInstancePool#idle_count}.

---

##### `PendingIdleCount`<sup>Optional</sup> <a name="PendingIdleCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats.property.pendingIdleCount"></a>

```go
PendingIdleCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#pending_idle_count DataDatabricksInstancePool#pending_idle_count}.

---

##### `PendingUsedCount`<sup>Optional</sup> <a name="PendingUsedCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats.property.pendingUsedCount"></a>

```go
PendingUsedCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#pending_used_count DataDatabricksInstancePool#pending_used_count}.

---

##### `UsedCount`<sup>Optional</sup> <a name="UsedCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats.property.usedCount"></a>

```go
UsedCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/instance_pool#used_count DataDatabricksInstancePool#used_count}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference <a name="DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.NewDataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resetInstanceProfileArn">ResetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resetSpotBidPricePercent">ResetSpotBidPricePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resetAvailability"></a>

```go
func ResetAvailability()
```

##### `ResetInstanceProfileArn` <a name="ResetInstanceProfileArn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resetInstanceProfileArn"></a>

```go
func ResetInstanceProfileArn()
```

##### `ResetSpotBidPricePercent` <a name="ResetSpotBidPricePercent" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resetSpotBidPricePercent"></a>

```go
func ResetSpotBidPricePercent()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resetZoneId"></a>

```go
func ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.spotBidPricePercentInput">SpotBidPricePercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.availability">Availability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.spotBidPricePercent">SpotBidPricePercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes">DataDatabricksInstancePoolPoolInfoAwsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.availabilityInput"></a>

```go
func AvailabilityInput() *string
```

- *Type:* *string

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.instanceProfileArnInput"></a>

```go
func InstanceProfileArnInput() *string
```

- *Type:* *string

---

##### `SpotBidPricePercentInput`<sup>Optional</sup> <a name="SpotBidPricePercentInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.spotBidPricePercentInput"></a>

```go
func SpotBidPricePercentInput() *f64
```

- *Type:* *f64

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.availability"></a>

```go
func Availability() *string
```

- *Type:* *string

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.instanceProfileArn"></a>

```go
func InstanceProfileArn() *string
```

- *Type:* *string

---

##### `SpotBidPricePercent`<sup>Required</sup> <a name="SpotBidPricePercent" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.spotBidPricePercent"></a>

```go
func SpotBidPricePercent() *f64
```

- *Type:* *f64

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksInstancePoolPoolInfoAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes">DataDatabricksInstancePoolPoolInfoAwsAttributes</a>

---


### DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference <a name="DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.NewDataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.resetSpotBidMaxPrice">ResetSpotBidMaxPrice</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.resetAvailability"></a>

```go
func ResetAvailability()
```

##### `ResetSpotBidMaxPrice` <a name="ResetSpotBidMaxPrice" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.resetSpotBidMaxPrice"></a>

```go
func ResetSpotBidMaxPrice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.spotBidMaxPriceInput">SpotBidMaxPriceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.availability">Availability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.spotBidMaxPrice">SpotBidMaxPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes">DataDatabricksInstancePoolPoolInfoAzureAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.availabilityInput"></a>

```go
func AvailabilityInput() *string
```

- *Type:* *string

---

##### `SpotBidMaxPriceInput`<sup>Optional</sup> <a name="SpotBidMaxPriceInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.spotBidMaxPriceInput"></a>

```go
func SpotBidMaxPriceInput() *f64
```

- *Type:* *f64

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.availability"></a>

```go
func Availability() *string
```

- *Type:* *string

---

##### `SpotBidMaxPrice`<sup>Required</sup> <a name="SpotBidMaxPrice" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.spotBidMaxPrice"></a>

```go
func SpotBidMaxPrice() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksInstancePoolPoolInfoAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes">DataDatabricksInstancePoolPoolInfoAzureAttributes</a>

---


### DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference <a name="DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.NewDataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.resetAzureDiskVolumeType">ResetAzureDiskVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.resetEbsVolumeType">ResetEbsVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAzureDiskVolumeType` <a name="ResetAzureDiskVolumeType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.resetAzureDiskVolumeType"></a>

```go
func ResetAzureDiskVolumeType()
```

##### `ResetEbsVolumeType` <a name="ResetEbsVolumeType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.resetEbsVolumeType"></a>

```go
func ResetEbsVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.azureDiskVolumeTypeInput">AzureDiskVolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.ebsVolumeTypeInput">EbsVolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.azureDiskVolumeType">AzureDiskVolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.ebsVolumeType">EbsVolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType">DataDatabricksInstancePoolPoolInfoDiskSpecDiskType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureDiskVolumeTypeInput`<sup>Optional</sup> <a name="AzureDiskVolumeTypeInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.azureDiskVolumeTypeInput"></a>

```go
func AzureDiskVolumeTypeInput() *string
```

- *Type:* *string

---

##### `EbsVolumeTypeInput`<sup>Optional</sup> <a name="EbsVolumeTypeInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.ebsVolumeTypeInput"></a>

```go
func EbsVolumeTypeInput() *string
```

- *Type:* *string

---

##### `AzureDiskVolumeType`<sup>Required</sup> <a name="AzureDiskVolumeType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.azureDiskVolumeType"></a>

```go
func AzureDiskVolumeType() *string
```

- *Type:* *string

---

##### `EbsVolumeType`<sup>Required</sup> <a name="EbsVolumeType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.ebsVolumeType"></a>

```go
func EbsVolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksInstancePoolPoolInfoDiskSpecDiskType
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType">DataDatabricksInstancePoolPoolInfoDiskSpecDiskType</a>

---


### DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference <a name="DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.NewDataDatabricksInstancePoolPoolInfoDiskSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.putDiskType">PutDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.resetDiskCount">ResetDiskCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.resetDiskSize">ResetDiskSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDiskType` <a name="PutDiskType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.putDiskType"></a>

```go
func PutDiskType(value DataDatabricksInstancePoolPoolInfoDiskSpecDiskType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.putDiskType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType">DataDatabricksInstancePoolPoolInfoDiskSpecDiskType</a>

---

##### `ResetDiskCount` <a name="ResetDiskCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.resetDiskCount"></a>

```go
func ResetDiskCount()
```

##### `ResetDiskSize` <a name="ResetDiskSize" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.resetDiskSize"></a>

```go
func ResetDiskSize()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.resetDiskType"></a>

```go
func ResetDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskType">DiskType</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference">DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskCountInput">DiskCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskSizeInput">DiskSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType">DataDatabricksInstancePoolPoolInfoDiskSpecDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskCount">DiskCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskSize">DiskSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec">DataDatabricksInstancePoolPoolInfoDiskSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskType"></a>

```go
func DiskType() DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference">DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference</a>

---

##### `DiskCountInput`<sup>Optional</sup> <a name="DiskCountInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskCountInput"></a>

```go
func DiskCountInput() *f64
```

- *Type:* *f64

---

##### `DiskSizeInput`<sup>Optional</sup> <a name="DiskSizeInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskSizeInput"></a>

```go
func DiskSizeInput() *f64
```

- *Type:* *f64

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskTypeInput"></a>

```go
func DiskTypeInput() DataDatabricksInstancePoolPoolInfoDiskSpecDiskType
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType">DataDatabricksInstancePoolPoolInfoDiskSpecDiskType</a>

---

##### `DiskCount`<sup>Required</sup> <a name="DiskCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskCount"></a>

```go
func DiskCount() *f64
```

- *Type:* *f64

---

##### `DiskSize`<sup>Required</sup> <a name="DiskSize" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskSize"></a>

```go
func DiskSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksInstancePoolPoolInfoDiskSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec">DataDatabricksInstancePoolPoolInfoDiskSpec</a>

---


### DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference <a name="DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.NewDataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.resetGcpAvailability">ResetGcpAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.resetLocalSsdCount">ResetLocalSsdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGcpAvailability` <a name="ResetGcpAvailability" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.resetGcpAvailability"></a>

```go
func ResetGcpAvailability()
```

##### `ResetLocalSsdCount` <a name="ResetLocalSsdCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.resetLocalSsdCount"></a>

```go
func ResetLocalSsdCount()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.resetZoneId"></a>

```go
func ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.gcpAvailabilityInput">GcpAvailabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.localSsdCountInput">LocalSsdCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.gcpAvailability">GcpAvailability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.localSsdCount">LocalSsdCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes">DataDatabricksInstancePoolPoolInfoGcpAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcpAvailabilityInput`<sup>Optional</sup> <a name="GcpAvailabilityInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.gcpAvailabilityInput"></a>

```go
func GcpAvailabilityInput() *string
```

- *Type:* *string

---

##### `LocalSsdCountInput`<sup>Optional</sup> <a name="LocalSsdCountInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.localSsdCountInput"></a>

```go
func LocalSsdCountInput() *f64
```

- *Type:* *f64

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `GcpAvailability`<sup>Required</sup> <a name="GcpAvailability" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.gcpAvailability"></a>

```go
func GcpAvailability() *string
```

- *Type:* *string

---

##### `LocalSsdCount`<sup>Required</sup> <a name="LocalSsdCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.localSsdCount"></a>

```go
func LocalSsdCount() *f64
```

- *Type:* *f64

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksInstancePoolPoolInfoGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes">DataDatabricksInstancePoolPoolInfoGcpAttributes</a>

---


### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.NewDataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resetInstancePoolsToUseCount">ResetInstancePoolsToUseCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstancePoolsToUseCount` <a name="ResetInstancePoolsToUseCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resetInstancePoolsToUseCount"></a>

```go
func ResetInstancePoolsToUseCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCountInput">InstancePoolsToUseCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategyInput"></a>

```go
func AllocationStrategyInput() *string
```

- *Type:* *string

---

##### `InstancePoolsToUseCountInput`<sup>Optional</sup> <a name="InstancePoolsToUseCountInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCountInput"></a>

```go
func InstancePoolsToUseCountInput() *f64
```

- *Type:* *f64

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategy"></a>

```go
func AllocationStrategy() *string
```

- *Type:* *string

---

##### `InstancePoolsToUseCount`<sup>Required</sup> <a name="InstancePoolsToUseCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCount"></a>

```go
func InstancePoolsToUseCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption</a>

---


### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.NewDataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.resetInstancePoolsToUseCount">ResetInstancePoolsToUseCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstancePoolsToUseCount` <a name="ResetInstancePoolsToUseCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.resetInstancePoolsToUseCount"></a>

```go
func ResetInstancePoolsToUseCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCountInput">InstancePoolsToUseCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategyInput"></a>

```go
func AllocationStrategyInput() *string
```

- *Type:* *string

---

##### `InstancePoolsToUseCountInput`<sup>Optional</sup> <a name="InstancePoolsToUseCountInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCountInput"></a>

```go
func InstancePoolsToUseCountInput() *f64
```

- *Type:* *f64

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategy"></a>

```go
func AllocationStrategy() *string
```

- *Type:* *string

---

##### `InstancePoolsToUseCount`<sup>Required</sup> <a name="InstancePoolsToUseCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCount"></a>

```go
func InstancePoolsToUseCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption</a>

---


### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.NewDataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.get"></a>

```go
func Get(index *f64) DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.NewDataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.NewDataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.get"></a>

```go
func Get(index *f64) DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.NewDataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption">PutFleetOnDemandOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.putFleetSpotOption">PutFleetSpotOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.putLaunchTemplateOverride">PutLaunchTemplateOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.resetFleetOnDemandOption">ResetFleetOnDemandOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.resetFleetSpotOption">ResetFleetSpotOption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFleetOnDemandOption` <a name="PutFleetOnDemandOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption"></a>

```go
func PutFleetOnDemandOption(value DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption</a>

---

##### `PutFleetSpotOption` <a name="PutFleetSpotOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.putFleetSpotOption"></a>

```go
func PutFleetSpotOption(value DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.putFleetSpotOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption</a>

---

##### `PutLaunchTemplateOverride` <a name="PutLaunchTemplateOverride" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.putLaunchTemplateOverride"></a>

```go
func PutLaunchTemplateOverride(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.putLaunchTemplateOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFleetOnDemandOption` <a name="ResetFleetOnDemandOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.resetFleetOnDemandOption"></a>

```go
func ResetFleetOnDemandOption()
```

##### `ResetFleetSpotOption` <a name="ResetFleetSpotOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.resetFleetSpotOption"></a>

```go
func ResetFleetSpotOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOption">FleetOnDemandOption</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fleetSpotOption">FleetSpotOption</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.launchTemplateOverride">LaunchTemplateOverride</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOptionInput">FleetOnDemandOptionInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fleetSpotOptionInput">FleetSpotOptionInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.launchTemplateOverrideInput">LaunchTemplateOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FleetOnDemandOption`<sup>Required</sup> <a name="FleetOnDemandOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOption"></a>

```go
func FleetOnDemandOption() DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference</a>

---

##### `FleetSpotOption`<sup>Required</sup> <a name="FleetSpotOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fleetSpotOption"></a>

```go
func FleetSpotOption() DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference</a>

---

##### `LaunchTemplateOverride`<sup>Required</sup> <a name="LaunchTemplateOverride" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.launchTemplateOverride"></a>

```go
func LaunchTemplateOverride() DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList</a>

---

##### `FleetOnDemandOptionInput`<sup>Optional</sup> <a name="FleetOnDemandOptionInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOptionInput"></a>

```go
func FleetOnDemandOptionInput() DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption</a>

---

##### `FleetSpotOptionInput`<sup>Optional</sup> <a name="FleetSpotOptionInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fleetSpotOptionInput"></a>

```go
func FleetSpotOptionInput() DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption</a>

---

##### `LaunchTemplateOverrideInput`<sup>Optional</sup> <a name="LaunchTemplateOverrideInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.launchTemplateOverrideInput"></a>

```go
func LaunchTemplateOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksInstancePoolPoolInfoOutputReference <a name="DataDatabricksInstancePoolPoolInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.NewDataDatabricksInstancePoolPoolInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksInstancePoolPoolInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putAwsAttributes">PutAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putAzureAttributes">PutAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putDiskSpec">PutDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putGcpAttributes">PutGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putInstancePoolFleetAttributes">PutInstancePoolFleetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putPreloadedDockerImage">PutPreloadedDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putStats">PutStats</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetAwsAttributes">ResetAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetAzureAttributes">ResetAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetDefaultTags">ResetDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetDiskSpec">ResetDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetEnableElasticDisk">ResetEnableElasticDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetGcpAttributes">ResetGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetInstancePoolFleetAttributes">ResetInstancePoolFleetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetInstancePoolId">ResetInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetMinIdleInstances">ResetMinIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetNodeTypeId">ResetNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetPreloadedDockerImage">ResetPreloadedDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetPreloadedSparkVersions">ResetPreloadedSparkVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetStats">ResetStats</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsAttributes` <a name="PutAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putAwsAttributes"></a>

```go
func PutAwsAttributes(value DataDatabricksInstancePoolPoolInfoAwsAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putAwsAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes">DataDatabricksInstancePoolPoolInfoAwsAttributes</a>

---

##### `PutAzureAttributes` <a name="PutAzureAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putAzureAttributes"></a>

```go
func PutAzureAttributes(value DataDatabricksInstancePoolPoolInfoAzureAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putAzureAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes">DataDatabricksInstancePoolPoolInfoAzureAttributes</a>

---

##### `PutDiskSpec` <a name="PutDiskSpec" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putDiskSpec"></a>

```go
func PutDiskSpec(value DataDatabricksInstancePoolPoolInfoDiskSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec">DataDatabricksInstancePoolPoolInfoDiskSpec</a>

---

##### `PutGcpAttributes` <a name="PutGcpAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putGcpAttributes"></a>

```go
func PutGcpAttributes(value DataDatabricksInstancePoolPoolInfoGcpAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putGcpAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes">DataDatabricksInstancePoolPoolInfoGcpAttributes</a>

---

##### `PutInstancePoolFleetAttributes` <a name="PutInstancePoolFleetAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putInstancePoolFleetAttributes"></a>

```go
func PutInstancePoolFleetAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putInstancePoolFleetAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPreloadedDockerImage` <a name="PutPreloadedDockerImage" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putPreloadedDockerImage"></a>

```go
func PutPreloadedDockerImage(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putPreloadedDockerImage.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStats` <a name="PutStats" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putStats"></a>

```go
func PutStats(value DataDatabricksInstancePoolPoolInfoStats)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putStats.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats">DataDatabricksInstancePoolPoolInfoStats</a>

---

##### `ResetAwsAttributes` <a name="ResetAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetAwsAttributes"></a>

```go
func ResetAwsAttributes()
```

##### `ResetAzureAttributes` <a name="ResetAzureAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetAzureAttributes"></a>

```go
func ResetAzureAttributes()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetCustomTags"></a>

```go
func ResetCustomTags()
```

##### `ResetDefaultTags` <a name="ResetDefaultTags" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetDefaultTags"></a>

```go
func ResetDefaultTags()
```

##### `ResetDiskSpec` <a name="ResetDiskSpec" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetDiskSpec"></a>

```go
func ResetDiskSpec()
```

##### `ResetEnableElasticDisk` <a name="ResetEnableElasticDisk" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetEnableElasticDisk"></a>

```go
func ResetEnableElasticDisk()
```

##### `ResetGcpAttributes` <a name="ResetGcpAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetGcpAttributes"></a>

```go
func ResetGcpAttributes()
```

##### `ResetInstancePoolFleetAttributes` <a name="ResetInstancePoolFleetAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetInstancePoolFleetAttributes"></a>

```go
func ResetInstancePoolFleetAttributes()
```

##### `ResetInstancePoolId` <a name="ResetInstancePoolId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetInstancePoolId"></a>

```go
func ResetInstancePoolId()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetMaxCapacity"></a>

```go
func ResetMaxCapacity()
```

##### `ResetMinIdleInstances` <a name="ResetMinIdleInstances" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetMinIdleInstances"></a>

```go
func ResetMinIdleInstances()
```

##### `ResetNodeTypeId` <a name="ResetNodeTypeId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetNodeTypeId"></a>

```go
func ResetNodeTypeId()
```

##### `ResetPreloadedDockerImage` <a name="ResetPreloadedDockerImage" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetPreloadedDockerImage"></a>

```go
func ResetPreloadedDockerImage()
```

##### `ResetPreloadedSparkVersions` <a name="ResetPreloadedSparkVersions" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetPreloadedSparkVersions"></a>

```go
func ResetPreloadedSparkVersions()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetStats` <a name="ResetStats" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetStats"></a>

```go
func ResetStats()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.awsAttributes">AwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference">DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.azureAttributes">AzureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference">DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.diskSpec">DiskSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference">DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.gcpAttributes">GcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference">DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolFleetAttributes">InstancePoolFleetAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.preloadedDockerImage">PreloadedDockerImage</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.stats">Stats</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference">DataDatabricksInstancePoolPoolInfoStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.awsAttributesInput">AwsAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes">DataDatabricksInstancePoolPoolInfoAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.azureAttributesInput">AzureAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes">DataDatabricksInstancePoolPoolInfoAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.customTagsInput">CustomTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.defaultTagsInput">DefaultTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.diskSpecInput">DiskSpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec">DataDatabricksInstancePoolPoolInfoDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.enableElasticDiskInput">EnableElasticDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.gcpAttributesInput">GcpAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes">DataDatabricksInstancePoolPoolInfoGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.idleInstanceAutoterminationMinutesInput">IdleInstanceAutoterminationMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolFleetAttributesInput">InstancePoolFleetAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolIdInput">InstancePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolNameInput">InstancePoolNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.minIdleInstancesInput">MinIdleInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.nodeTypeIdInput">NodeTypeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.preloadedDockerImageInput">PreloadedDockerImageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.preloadedSparkVersionsInput">PreloadedSparkVersionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.statsInput">StatsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats">DataDatabricksInstancePoolPoolInfoStats</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.customTags">CustomTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.defaultTags">DefaultTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.enableElasticDisk">EnableElasticDisk</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.idleInstanceAutoterminationMinutes">IdleInstanceAutoterminationMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolId">InstancePoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolName">InstancePoolName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.minIdleInstances">MinIdleInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.nodeTypeId">NodeTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.preloadedSparkVersions">PreloadedSparkVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo">DataDatabricksInstancePoolPoolInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsAttributes`<sup>Required</sup> <a name="AwsAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.awsAttributes"></a>

```go
func AwsAttributes() DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference">DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference</a>

---

##### `AzureAttributes`<sup>Required</sup> <a name="AzureAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.azureAttributes"></a>

```go
func AzureAttributes() DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference">DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference</a>

---

##### `DiskSpec`<sup>Required</sup> <a name="DiskSpec" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.diskSpec"></a>

```go
func DiskSpec() DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference">DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference</a>

---

##### `GcpAttributes`<sup>Required</sup> <a name="GcpAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.gcpAttributes"></a>

```go
func GcpAttributes() DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference">DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference</a>

---

##### `InstancePoolFleetAttributes`<sup>Required</sup> <a name="InstancePoolFleetAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolFleetAttributes"></a>

```go
func InstancePoolFleetAttributes() DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList</a>

---

##### `PreloadedDockerImage`<sup>Required</sup> <a name="PreloadedDockerImage" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.preloadedDockerImage"></a>

```go
func PreloadedDockerImage() DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList</a>

---

##### `Stats`<sup>Required</sup> <a name="Stats" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.stats"></a>

```go
func Stats() DataDatabricksInstancePoolPoolInfoStatsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference">DataDatabricksInstancePoolPoolInfoStatsOutputReference</a>

---

##### `AwsAttributesInput`<sup>Optional</sup> <a name="AwsAttributesInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.awsAttributesInput"></a>

```go
func AwsAttributesInput() DataDatabricksInstancePoolPoolInfoAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes">DataDatabricksInstancePoolPoolInfoAwsAttributes</a>

---

##### `AzureAttributesInput`<sup>Optional</sup> <a name="AzureAttributesInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.azureAttributesInput"></a>

```go
func AzureAttributesInput() DataDatabricksInstancePoolPoolInfoAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes">DataDatabricksInstancePoolPoolInfoAzureAttributes</a>

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.customTagsInput"></a>

```go
func CustomTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultTagsInput`<sup>Optional</sup> <a name="DefaultTagsInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.defaultTagsInput"></a>

```go
func DefaultTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DiskSpecInput`<sup>Optional</sup> <a name="DiskSpecInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.diskSpecInput"></a>

```go
func DiskSpecInput() DataDatabricksInstancePoolPoolInfoDiskSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec">DataDatabricksInstancePoolPoolInfoDiskSpec</a>

---

##### `EnableElasticDiskInput`<sup>Optional</sup> <a name="EnableElasticDiskInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.enableElasticDiskInput"></a>

```go
func EnableElasticDiskInput() interface{}
```

- *Type:* interface{}

---

##### `GcpAttributesInput`<sup>Optional</sup> <a name="GcpAttributesInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.gcpAttributesInput"></a>

```go
func GcpAttributesInput() DataDatabricksInstancePoolPoolInfoGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes">DataDatabricksInstancePoolPoolInfoGcpAttributes</a>

---

##### `IdleInstanceAutoterminationMinutesInput`<sup>Optional</sup> <a name="IdleInstanceAutoterminationMinutesInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.idleInstanceAutoterminationMinutesInput"></a>

```go
func IdleInstanceAutoterminationMinutesInput() *f64
```

- *Type:* *f64

---

##### `InstancePoolFleetAttributesInput`<sup>Optional</sup> <a name="InstancePoolFleetAttributesInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolFleetAttributesInput"></a>

```go
func InstancePoolFleetAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `InstancePoolIdInput`<sup>Optional</sup> <a name="InstancePoolIdInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolIdInput"></a>

```go
func InstancePoolIdInput() *string
```

- *Type:* *string

---

##### `InstancePoolNameInput`<sup>Optional</sup> <a name="InstancePoolNameInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolNameInput"></a>

```go
func InstancePoolNameInput() *string
```

- *Type:* *string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.maxCapacityInput"></a>

```go
func MaxCapacityInput() *f64
```

- *Type:* *f64

---

##### `MinIdleInstancesInput`<sup>Optional</sup> <a name="MinIdleInstancesInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.minIdleInstancesInput"></a>

```go
func MinIdleInstancesInput() *f64
```

- *Type:* *f64

---

##### `NodeTypeIdInput`<sup>Optional</sup> <a name="NodeTypeIdInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.nodeTypeIdInput"></a>

```go
func NodeTypeIdInput() *string
```

- *Type:* *string

---

##### `PreloadedDockerImageInput`<sup>Optional</sup> <a name="PreloadedDockerImageInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.preloadedDockerImageInput"></a>

```go
func PreloadedDockerImageInput() interface{}
```

- *Type:* interface{}

---

##### `PreloadedSparkVersionsInput`<sup>Optional</sup> <a name="PreloadedSparkVersionsInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.preloadedSparkVersionsInput"></a>

```go
func PreloadedSparkVersionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `StatsInput`<sup>Optional</sup> <a name="StatsInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.statsInput"></a>

```go
func StatsInput() DataDatabricksInstancePoolPoolInfoStats
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats">DataDatabricksInstancePoolPoolInfoStats</a>

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.customTags"></a>

```go
func CustomTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultTags`<sup>Required</sup> <a name="DefaultTags" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.defaultTags"></a>

```go
func DefaultTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EnableElasticDisk`<sup>Required</sup> <a name="EnableElasticDisk" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.enableElasticDisk"></a>

```go
func EnableElasticDisk() interface{}
```

- *Type:* interface{}

---

##### `IdleInstanceAutoterminationMinutes`<sup>Required</sup> <a name="IdleInstanceAutoterminationMinutes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.idleInstanceAutoterminationMinutes"></a>

```go
func IdleInstanceAutoterminationMinutes() *f64
```

- *Type:* *f64

---

##### `InstancePoolId`<sup>Required</sup> <a name="InstancePoolId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolId"></a>

```go
func InstancePoolId() *string
```

- *Type:* *string

---

##### `InstancePoolName`<sup>Required</sup> <a name="InstancePoolName" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolName"></a>

```go
func InstancePoolName() *string
```

- *Type:* *string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MinIdleInstances`<sup>Required</sup> <a name="MinIdleInstances" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.minIdleInstances"></a>

```go
func MinIdleInstances() *f64
```

- *Type:* *f64

---

##### `NodeTypeId`<sup>Required</sup> <a name="NodeTypeId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.nodeTypeId"></a>

```go
func NodeTypeId() *string
```

- *Type:* *string

---

##### `PreloadedSparkVersions`<sup>Required</sup> <a name="PreloadedSparkVersions" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.preloadedSparkVersions"></a>

```go
func PreloadedSparkVersions() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksInstancePoolPoolInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo">DataDatabricksInstancePoolPoolInfo</a>

---


### DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference <a name="DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.NewDataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth</a>

---


### DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList <a name="DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.NewDataDatabricksInstancePoolPoolInfoPreloadedDockerImageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.get"></a>

```go
func Get(index *f64) DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference <a name="DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.NewDataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.putBasicAuth">PutBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.resetBasicAuth">ResetBasicAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicAuth` <a name="PutBasicAuth" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.putBasicAuth"></a>

```go
func PutBasicAuth(value DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth</a>

---

##### `ResetBasicAuth` <a name="ResetBasicAuth" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.resetBasicAuth"></a>

```go
func ResetBasicAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.basicAuth">BasicAuth</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.basicAuthInput">BasicAuthInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BasicAuth`<sup>Required</sup> <a name="BasicAuth" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.basicAuth"></a>

```go
func BasicAuth() DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference</a>

---

##### `BasicAuthInput`<sup>Optional</sup> <a name="BasicAuthInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.basicAuthInput"></a>

```go
func BasicAuthInput() DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth</a>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksInstancePoolPoolInfoStatsOutputReference <a name="DataDatabricksInstancePoolPoolInfoStatsOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksinstancepool"

datadatabricksinstancepool.NewDataDatabricksInstancePoolPoolInfoStatsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksInstancePoolPoolInfoStatsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resetIdleCount">ResetIdleCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resetPendingIdleCount">ResetPendingIdleCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resetPendingUsedCount">ResetPendingUsedCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resetUsedCount">ResetUsedCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleCount` <a name="ResetIdleCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resetIdleCount"></a>

```go
func ResetIdleCount()
```

##### `ResetPendingIdleCount` <a name="ResetPendingIdleCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resetPendingIdleCount"></a>

```go
func ResetPendingIdleCount()
```

##### `ResetPendingUsedCount` <a name="ResetPendingUsedCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resetPendingUsedCount"></a>

```go
func ResetPendingUsedCount()
```

##### `ResetUsedCount` <a name="ResetUsedCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resetUsedCount"></a>

```go
func ResetUsedCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.idleCountInput">IdleCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.pendingIdleCountInput">PendingIdleCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.pendingUsedCountInput">PendingUsedCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.usedCountInput">UsedCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.idleCount">IdleCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.pendingIdleCount">PendingIdleCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.pendingUsedCount">PendingUsedCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.usedCount">UsedCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats">DataDatabricksInstancePoolPoolInfoStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdleCountInput`<sup>Optional</sup> <a name="IdleCountInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.idleCountInput"></a>

```go
func IdleCountInput() *f64
```

- *Type:* *f64

---

##### `PendingIdleCountInput`<sup>Optional</sup> <a name="PendingIdleCountInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.pendingIdleCountInput"></a>

```go
func PendingIdleCountInput() *f64
```

- *Type:* *f64

---

##### `PendingUsedCountInput`<sup>Optional</sup> <a name="PendingUsedCountInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.pendingUsedCountInput"></a>

```go
func PendingUsedCountInput() *f64
```

- *Type:* *f64

---

##### `UsedCountInput`<sup>Optional</sup> <a name="UsedCountInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.usedCountInput"></a>

```go
func UsedCountInput() *f64
```

- *Type:* *f64

---

##### `IdleCount`<sup>Required</sup> <a name="IdleCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.idleCount"></a>

```go
func IdleCount() *f64
```

- *Type:* *f64

---

##### `PendingIdleCount`<sup>Required</sup> <a name="PendingIdleCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.pendingIdleCount"></a>

```go
func PendingIdleCount() *f64
```

- *Type:* *f64

---

##### `PendingUsedCount`<sup>Required</sup> <a name="PendingUsedCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.pendingUsedCount"></a>

```go
func PendingUsedCount() *f64
```

- *Type:* *f64

---

##### `UsedCount`<sup>Required</sup> <a name="UsedCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.usedCount"></a>

```go
func UsedCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksInstancePoolPoolInfoStats
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats">DataDatabricksInstancePoolPoolInfoStats</a>

---



