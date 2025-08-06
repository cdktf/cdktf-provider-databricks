# `databaseInstance` Submodule <a name="`databaseInstance` Submodule" id="@cdktf/provider-databricks.databaseInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseInstance <a name="DatabaseInstance" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance databricks_database_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/databaseinstance"

databaseinstance.NewDatabaseInstance(scope Construct, id *string, config DatabaseInstanceConfig) DatabaseInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig">DatabaseInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig">DatabaseInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.putParentInstanceRef">PutParentInstanceRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetEnableReadableSecondaries">ResetEnableReadableSecondaries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetParentInstanceRef">ResetParentInstanceRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetPurgeOnDelete">ResetPurgeOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetRetentionWindowInDays">ResetRetentionWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetStopped">ResetStopped</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParentInstanceRef` <a name="PutParentInstanceRef" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.putParentInstanceRef"></a>

```go
func PutParentInstanceRef(value DatabaseInstanceParentInstanceRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.putParentInstanceRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef">DatabaseInstanceParentInstanceRef</a>

---

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetCapacity"></a>

```go
func ResetCapacity()
```

##### `ResetEnableReadableSecondaries` <a name="ResetEnableReadableSecondaries" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetEnableReadableSecondaries"></a>

```go
func ResetEnableReadableSecondaries()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetNodeCount"></a>

```go
func ResetNodeCount()
```

##### `ResetParentInstanceRef` <a name="ResetParentInstanceRef" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetParentInstanceRef"></a>

```go
func ResetParentInstanceRef()
```

##### `ResetPurgeOnDelete` <a name="ResetPurgeOnDelete" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetPurgeOnDelete"></a>

```go
func ResetPurgeOnDelete()
```

##### `ResetRetentionWindowInDays` <a name="ResetRetentionWindowInDays" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetRetentionWindowInDays"></a>

```go
func ResetRetentionWindowInDays()
```

##### `ResetStopped` <a name="ResetStopped" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetStopped"></a>

```go
func ResetStopped()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/databaseinstance"

databaseinstance.DatabaseInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/databaseinstance"

databaseinstance.DatabaseInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/databaseinstance"

databaseinstance.DatabaseInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/databaseinstance"

databaseinstance.DatabaseInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.childInstanceRefs">ChildInstanceRefs</a></code> | <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList">DatabaseInstanceChildInstanceRefsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveEnableReadableSecondaries">EffectiveEnableReadableSecondaries</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveNodeCount">EffectiveNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveRetentionWindowInDays">EffectiveRetentionWindowInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveStopped">EffectiveStopped</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.parentInstanceRef">ParentInstanceRef</a></code> | <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference">DatabaseInstanceParentInstanceRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.pgVersion">PgVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.readOnlyDns">ReadOnlyDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.readWriteDns">ReadWriteDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.capacityInput">CapacityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enableReadableSecondariesInput">EnableReadableSecondariesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.parentInstanceRefInput">ParentInstanceRefInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.purgeOnDeleteInput">PurgeOnDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.retentionWindowInDaysInput">RetentionWindowInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.stoppedInput">StoppedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.capacity">Capacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enableReadableSecondaries">EnableReadableSecondaries</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.purgeOnDelete">PurgeOnDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.retentionWindowInDays">RetentionWindowInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.stopped">Stopped</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChildInstanceRefs`<sup>Required</sup> <a name="ChildInstanceRefs" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.childInstanceRefs"></a>

```go
func ChildInstanceRefs() DatabaseInstanceChildInstanceRefsList
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList">DatabaseInstanceChildInstanceRefsList</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `EffectiveEnableReadableSecondaries`<sup>Required</sup> <a name="EffectiveEnableReadableSecondaries" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveEnableReadableSecondaries"></a>

```go
func EffectiveEnableReadableSecondaries() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EffectiveNodeCount`<sup>Required</sup> <a name="EffectiveNodeCount" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveNodeCount"></a>

```go
func EffectiveNodeCount() *f64
```

- *Type:* *f64

---

##### `EffectiveRetentionWindowInDays`<sup>Required</sup> <a name="EffectiveRetentionWindowInDays" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveRetentionWindowInDays"></a>

```go
func EffectiveRetentionWindowInDays() *f64
```

- *Type:* *f64

---

##### `EffectiveStopped`<sup>Required</sup> <a name="EffectiveStopped" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveStopped"></a>

```go
func EffectiveStopped() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ParentInstanceRef`<sup>Required</sup> <a name="ParentInstanceRef" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.parentInstanceRef"></a>

```go
func ParentInstanceRef() DatabaseInstanceParentInstanceRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference">DatabaseInstanceParentInstanceRefOutputReference</a>

---

##### `PgVersion`<sup>Required</sup> <a name="PgVersion" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.pgVersion"></a>

```go
func PgVersion() *string
```

- *Type:* *string

---

##### `ReadOnlyDns`<sup>Required</sup> <a name="ReadOnlyDns" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.readOnlyDns"></a>

```go
func ReadOnlyDns() *string
```

- *Type:* *string

---

##### `ReadWriteDns`<sup>Required</sup> <a name="ReadWriteDns" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.readWriteDns"></a>

```go
func ReadWriteDns() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.capacityInput"></a>

```go
func CapacityInput() *string
```

- *Type:* *string

---

##### `EnableReadableSecondariesInput`<sup>Optional</sup> <a name="EnableReadableSecondariesInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enableReadableSecondariesInput"></a>

```go
func EnableReadableSecondariesInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `ParentInstanceRefInput`<sup>Optional</sup> <a name="ParentInstanceRefInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.parentInstanceRefInput"></a>

```go
func ParentInstanceRefInput() interface{}
```

- *Type:* interface{}

---

##### `PurgeOnDeleteInput`<sup>Optional</sup> <a name="PurgeOnDeleteInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.purgeOnDeleteInput"></a>

```go
func PurgeOnDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionWindowInDaysInput`<sup>Optional</sup> <a name="RetentionWindowInDaysInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.retentionWindowInDaysInput"></a>

```go
func RetentionWindowInDaysInput() *f64
```

- *Type:* *f64

---

##### `StoppedInput`<sup>Optional</sup> <a name="StoppedInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.stoppedInput"></a>

```go
func StoppedInput() interface{}
```

- *Type:* interface{}

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.capacity"></a>

```go
func Capacity() *string
```

- *Type:* *string

---

##### `EnableReadableSecondaries`<sup>Required</sup> <a name="EnableReadableSecondaries" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enableReadableSecondaries"></a>

```go
func EnableReadableSecondaries() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `PurgeOnDelete`<sup>Required</sup> <a name="PurgeOnDelete" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.purgeOnDelete"></a>

```go
func PurgeOnDelete() interface{}
```

- *Type:* interface{}

---

##### `RetentionWindowInDays`<sup>Required</sup> <a name="RetentionWindowInDays" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.retentionWindowInDays"></a>

```go
func RetentionWindowInDays() *f64
```

- *Type:* *f64

---

##### `Stopped`<sup>Required</sup> <a name="Stopped" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.stopped"></a>

```go
func Stopped() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseInstanceChildInstanceRefs <a name="DatabaseInstanceChildInstanceRefs" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/databaseinstance"

&databaseinstance.DatabaseInstanceChildInstanceRefs {
	BranchTime: *string,
	Lsn: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.property.branchTime">BranchTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#branch_time DatabaseInstance#branch_time}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.property.lsn">Lsn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#lsn DatabaseInstance#lsn}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#name DatabaseInstance#name}. |

---

##### `BranchTime`<sup>Optional</sup> <a name="BranchTime" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.property.branchTime"></a>

```go
BranchTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#branch_time DatabaseInstance#branch_time}.

---

##### `Lsn`<sup>Optional</sup> <a name="Lsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.property.lsn"></a>

```go
Lsn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#lsn DatabaseInstance#lsn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#name DatabaseInstance#name}.

---

### DatabaseInstanceConfig <a name="DatabaseInstanceConfig" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/databaseinstance"

&databaseinstance.DatabaseInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Capacity: *string,
	EnableReadableSecondaries: interface{},
	NodeCount: *f64,
	ParentInstanceRef: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.databaseInstance.DatabaseInstanceParentInstanceRef,
	PurgeOnDelete: interface{},
	RetentionWindowInDays: *f64,
	Stopped: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#name DatabaseInstance#name}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.capacity">Capacity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#capacity DatabaseInstance#capacity}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.enableReadableSecondaries">EnableReadableSecondaries</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#enable_readable_secondaries DatabaseInstance#enable_readable_secondaries}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#node_count DatabaseInstance#node_count}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.parentInstanceRef">ParentInstanceRef</a></code> | <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef">DatabaseInstanceParentInstanceRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#parent_instance_ref DatabaseInstance#parent_instance_ref}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.purgeOnDelete">PurgeOnDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#purge_on_delete DatabaseInstance#purge_on_delete}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.retentionWindowInDays">RetentionWindowInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#retention_window_in_days DatabaseInstance#retention_window_in_days}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.stopped">Stopped</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#stopped DatabaseInstance#stopped}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#name DatabaseInstance#name}.

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.capacity"></a>

```go
Capacity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#capacity DatabaseInstance#capacity}.

---

##### `EnableReadableSecondaries`<sup>Optional</sup> <a name="EnableReadableSecondaries" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.enableReadableSecondaries"></a>

```go
EnableReadableSecondaries interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#enable_readable_secondaries DatabaseInstance#enable_readable_secondaries}.

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#node_count DatabaseInstance#node_count}.

---

##### `ParentInstanceRef`<sup>Optional</sup> <a name="ParentInstanceRef" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.parentInstanceRef"></a>

```go
ParentInstanceRef DatabaseInstanceParentInstanceRef
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef">DatabaseInstanceParentInstanceRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#parent_instance_ref DatabaseInstance#parent_instance_ref}.

---

##### `PurgeOnDelete`<sup>Optional</sup> <a name="PurgeOnDelete" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.purgeOnDelete"></a>

```go
PurgeOnDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#purge_on_delete DatabaseInstance#purge_on_delete}.

---

##### `RetentionWindowInDays`<sup>Optional</sup> <a name="RetentionWindowInDays" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.retentionWindowInDays"></a>

```go
RetentionWindowInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#retention_window_in_days DatabaseInstance#retention_window_in_days}.

---

##### `Stopped`<sup>Optional</sup> <a name="Stopped" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.stopped"></a>

```go
Stopped interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#stopped DatabaseInstance#stopped}.

---

### DatabaseInstanceParentInstanceRef <a name="DatabaseInstanceParentInstanceRef" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/databaseinstance"

&databaseinstance.DatabaseInstanceParentInstanceRef {
	BranchTime: *string,
	Lsn: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.property.branchTime">BranchTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#branch_time DatabaseInstance#branch_time}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.property.lsn">Lsn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#lsn DatabaseInstance#lsn}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#name DatabaseInstance#name}. |

---

##### `BranchTime`<sup>Optional</sup> <a name="BranchTime" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.property.branchTime"></a>

```go
BranchTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#branch_time DatabaseInstance#branch_time}.

---

##### `Lsn`<sup>Optional</sup> <a name="Lsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.property.lsn"></a>

```go
Lsn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#lsn DatabaseInstance#lsn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/database_instance#name DatabaseInstance#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseInstanceChildInstanceRefsList <a name="DatabaseInstanceChildInstanceRefsList" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/databaseinstance"

databaseinstance.NewDatabaseInstanceChildInstanceRefsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseInstanceChildInstanceRefsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.get"></a>

```go
func Get(index *f64) DatabaseInstanceChildInstanceRefsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseInstanceChildInstanceRefsOutputReference <a name="DatabaseInstanceChildInstanceRefsOutputReference" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/databaseinstance"

databaseinstance.NewDatabaseInstanceChildInstanceRefsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseInstanceChildInstanceRefsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resetBranchTime">ResetBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resetLsn">ResetLsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchTime` <a name="ResetBranchTime" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resetBranchTime"></a>

```go
func ResetBranchTime()
```

##### `ResetLsn` <a name="ResetLsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resetLsn"></a>

```go
func ResetLsn()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.effectiveLsn">EffectiveLsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.branchTimeInput">BranchTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.lsnInput">LsnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.branchTime">BranchTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.lsn">Lsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs">DatabaseInstanceChildInstanceRefs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveLsn`<sup>Required</sup> <a name="EffectiveLsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.effectiveLsn"></a>

```go
func EffectiveLsn() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `BranchTimeInput`<sup>Optional</sup> <a name="BranchTimeInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.branchTimeInput"></a>

```go
func BranchTimeInput() *string
```

- *Type:* *string

---

##### `LsnInput`<sup>Optional</sup> <a name="LsnInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.lsnInput"></a>

```go
func LsnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `BranchTime`<sup>Required</sup> <a name="BranchTime" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.branchTime"></a>

```go
func BranchTime() *string
```

- *Type:* *string

---

##### `Lsn`<sup>Required</sup> <a name="Lsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.lsn"></a>

```go
func Lsn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseInstanceChildInstanceRefs
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs">DatabaseInstanceChildInstanceRefs</a>

---


### DatabaseInstanceParentInstanceRefOutputReference <a name="DatabaseInstanceParentInstanceRefOutputReference" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/databaseinstance"

databaseinstance.NewDatabaseInstanceParentInstanceRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseInstanceParentInstanceRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resetBranchTime">ResetBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resetLsn">ResetLsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchTime` <a name="ResetBranchTime" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resetBranchTime"></a>

```go
func ResetBranchTime()
```

##### `ResetLsn` <a name="ResetLsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resetLsn"></a>

```go
func ResetLsn()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.effectiveLsn">EffectiveLsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.branchTimeInput">BranchTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.lsnInput">LsnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.branchTime">BranchTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.lsn">Lsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveLsn`<sup>Required</sup> <a name="EffectiveLsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.effectiveLsn"></a>

```go
func EffectiveLsn() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `BranchTimeInput`<sup>Optional</sup> <a name="BranchTimeInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.branchTimeInput"></a>

```go
func BranchTimeInput() *string
```

- *Type:* *string

---

##### `LsnInput`<sup>Optional</sup> <a name="LsnInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.lsnInput"></a>

```go
func LsnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `BranchTime`<sup>Required</sup> <a name="BranchTime" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.branchTime"></a>

```go
func BranchTime() *string
```

- *Type:* *string

---

##### `Lsn`<sup>Required</sup> <a name="Lsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.lsn"></a>

```go
func Lsn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



