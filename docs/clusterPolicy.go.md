# `clusterPolicy` Submodule <a name="`clusterPolicy` Submodule" id="@cdktf/provider-databricks.clusterPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClusterPolicy <a name="ClusterPolicy" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy databricks_cluster_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/clusterpolicy"

clusterpolicy.NewClusterPolicy(scope Construct, id *string, config ClusterPolicyConfig) ClusterPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig">ClusterPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig">ClusterPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.putLibraries">PutLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetDefinition">ResetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetLibraries">ResetLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetMaxClustersPerUser">ResetMaxClustersPerUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetPolicyFamilyDefinitionOverrides">ResetPolicyFamilyDefinitionOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetPolicyFamilyId">ResetPolicyFamilyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLibraries` <a name="PutLibraries" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.putLibraries"></a>

```go
func PutLibraries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.putLibraries.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetDefinition"></a>

```go
func ResetDefinition()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLibraries` <a name="ResetLibraries" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetLibraries"></a>

```go
func ResetLibraries()
```

##### `ResetMaxClustersPerUser` <a name="ResetMaxClustersPerUser" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetMaxClustersPerUser"></a>

```go
func ResetMaxClustersPerUser()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetName"></a>

```go
func ResetName()
```

##### `ResetPolicyFamilyDefinitionOverrides` <a name="ResetPolicyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetPolicyFamilyDefinitionOverrides"></a>

```go
func ResetPolicyFamilyDefinitionOverrides()
```

##### `ResetPolicyFamilyId` <a name="ResetPolicyFamilyId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.resetPolicyFamilyId"></a>

```go
func ResetPolicyFamilyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ClusterPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/clusterpolicy"

clusterpolicy.ClusterPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/clusterpolicy"

clusterpolicy.ClusterPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/clusterpolicy"

clusterpolicy.ClusterPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/clusterpolicy"

clusterpolicy.ClusterPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ClusterPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ClusterPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ClusterPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ClusterPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.libraries">Libraries</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList">ClusterPolicyLibrariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.definitionInput">DefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.librariesInput">LibrariesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.maxClustersPerUserInput">MaxClustersPerUserInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyDefinitionOverridesInput">PolicyFamilyDefinitionOverridesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyIdInput">PolicyFamilyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.definition">Definition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.maxClustersPerUser">MaxClustersPerUser</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyDefinitionOverrides">PolicyFamilyDefinitionOverrides</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyId">PolicyFamilyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Libraries`<sup>Required</sup> <a name="Libraries" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.libraries"></a>

```go
func Libraries() ClusterPolicyLibrariesList
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList">ClusterPolicyLibrariesList</a>

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.definitionInput"></a>

```go
func DefinitionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LibrariesInput`<sup>Optional</sup> <a name="LibrariesInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.librariesInput"></a>

```go
func LibrariesInput() interface{}
```

- *Type:* interface{}

---

##### `MaxClustersPerUserInput`<sup>Optional</sup> <a name="MaxClustersPerUserInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.maxClustersPerUserInput"></a>

```go
func MaxClustersPerUserInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyFamilyDefinitionOverridesInput`<sup>Optional</sup> <a name="PolicyFamilyDefinitionOverridesInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyDefinitionOverridesInput"></a>

```go
func PolicyFamilyDefinitionOverridesInput() *string
```

- *Type:* *string

---

##### `PolicyFamilyIdInput`<sup>Optional</sup> <a name="PolicyFamilyIdInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyIdInput"></a>

```go
func PolicyFamilyIdInput() *string
```

- *Type:* *string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.definition"></a>

```go
func Definition() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxClustersPerUser`<sup>Required</sup> <a name="MaxClustersPerUser" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.maxClustersPerUser"></a>

```go
func MaxClustersPerUser() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyFamilyDefinitionOverrides`<sup>Required</sup> <a name="PolicyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyDefinitionOverrides"></a>

```go
func PolicyFamilyDefinitionOverrides() *string
```

- *Type:* *string

---

##### `PolicyFamilyId`<sup>Required</sup> <a name="PolicyFamilyId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyId"></a>

```go
func PolicyFamilyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterPolicyConfig <a name="ClusterPolicyConfig" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/clusterpolicy"

&clusterpolicy.ClusterPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Definition: *string,
	Description: *string,
	Id: *string,
	Libraries: interface{},
	MaxClustersPerUser: *f64,
	Name: *string,
	PolicyFamilyDefinitionOverrides: *string,
	PolicyFamilyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.definition">Definition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#definition ClusterPolicy#definition}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#description ClusterPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#id ClusterPolicy#id}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.libraries">Libraries</a></code> | <code>interface{}</code> | libraries block. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.maxClustersPerUser">MaxClustersPerUser</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#max_clusters_per_user ClusterPolicy#max_clusters_per_user}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#name ClusterPolicy#name}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.policyFamilyDefinitionOverrides">PolicyFamilyDefinitionOverrides</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#policy_family_definition_overrides ClusterPolicy#policy_family_definition_overrides}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.policyFamilyId">PolicyFamilyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#policy_family_id ClusterPolicy#policy_family_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.definition"></a>

```go
Definition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#definition ClusterPolicy#definition}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#description ClusterPolicy#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#id ClusterPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Libraries`<sup>Optional</sup> <a name="Libraries" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.libraries"></a>

```go
Libraries interface{}
```

- *Type:* interface{}

libraries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#libraries ClusterPolicy#libraries}

---

##### `MaxClustersPerUser`<sup>Optional</sup> <a name="MaxClustersPerUser" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.maxClustersPerUser"></a>

```go
MaxClustersPerUser *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#max_clusters_per_user ClusterPolicy#max_clusters_per_user}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#name ClusterPolicy#name}.

---

##### `PolicyFamilyDefinitionOverrides`<sup>Optional</sup> <a name="PolicyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.policyFamilyDefinitionOverrides"></a>

```go
PolicyFamilyDefinitionOverrides *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#policy_family_definition_overrides ClusterPolicy#policy_family_definition_overrides}.

---

##### `PolicyFamilyId`<sup>Optional</sup> <a name="PolicyFamilyId" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.policyFamilyId"></a>

```go
PolicyFamilyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#policy_family_id ClusterPolicy#policy_family_id}.

---

### ClusterPolicyLibraries <a name="ClusterPolicyLibraries" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/clusterpolicy"

&clusterpolicy.ClusterPolicyLibraries {
	Cran: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.clusterPolicy.ClusterPolicyLibrariesCran,
	Egg: *string,
	Jar: *string,
	Maven: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.clusterPolicy.ClusterPolicyLibrariesMaven,
	Pypi: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.clusterPolicy.ClusterPolicyLibrariesPypi,
	Requirements: *string,
	Whl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.cran">Cran</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a></code> | cran block. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.egg">Egg</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#egg ClusterPolicy#egg}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.jar">Jar</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#jar ClusterPolicy#jar}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.maven">Maven</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a></code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.pypi">Pypi</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a></code> | pypi block. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.requirements">Requirements</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#requirements ClusterPolicy#requirements}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.whl">Whl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#whl ClusterPolicy#whl}. |

---

##### `Cran`<sup>Optional</sup> <a name="Cran" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.cran"></a>

```go
Cran ClusterPolicyLibrariesCran
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a>

cran block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#cran ClusterPolicy#cran}

---

##### `Egg`<sup>Optional</sup> <a name="Egg" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.egg"></a>

```go
Egg *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#egg ClusterPolicy#egg}.

---

##### `Jar`<sup>Optional</sup> <a name="Jar" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.jar"></a>

```go
Jar *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#jar ClusterPolicy#jar}.

---

##### `Maven`<sup>Optional</sup> <a name="Maven" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.maven"></a>

```go
Maven ClusterPolicyLibrariesMaven
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a>

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#maven ClusterPolicy#maven}

---

##### `Pypi`<sup>Optional</sup> <a name="Pypi" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.pypi"></a>

```go
Pypi ClusterPolicyLibrariesPypi
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a>

pypi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#pypi ClusterPolicy#pypi}

---

##### `Requirements`<sup>Optional</sup> <a name="Requirements" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.requirements"></a>

```go
Requirements *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#requirements ClusterPolicy#requirements}.

---

##### `Whl`<sup>Optional</sup> <a name="Whl" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.whl"></a>

```go
Whl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#whl ClusterPolicy#whl}.

---

### ClusterPolicyLibrariesCran <a name="ClusterPolicyLibrariesCran" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/clusterpolicy"

&clusterpolicy.ClusterPolicyLibrariesCran {
	Package: *string,
	Repo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.property.package">Package</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#package ClusterPolicy#package}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.property.repo">Repo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}. |

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.property.package"></a>

```go
Package *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#package ClusterPolicy#package}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.property.repo"></a>

```go
Repo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}.

---

### ClusterPolicyLibrariesMaven <a name="ClusterPolicyLibrariesMaven" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/clusterpolicy"

&clusterpolicy.ClusterPolicyLibrariesMaven {
	Coordinates: *string,
	Exclusions: *[]*string,
	Repo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.coordinates">Coordinates</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#coordinates ClusterPolicy#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#exclusions ClusterPolicy#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.repo">Repo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}. |

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.coordinates"></a>

```go
Coordinates *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#coordinates ClusterPolicy#coordinates}.

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.exclusions"></a>

```go
Exclusions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#exclusions ClusterPolicy#exclusions}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.repo"></a>

```go
Repo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}.

---

### ClusterPolicyLibrariesPypi <a name="ClusterPolicyLibrariesPypi" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/clusterpolicy"

&clusterpolicy.ClusterPolicyLibrariesPypi {
	Package: *string,
	Repo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.property.package">Package</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#package ClusterPolicy#package}. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.property.repo">Repo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}. |

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.property.package"></a>

```go
Package *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#package ClusterPolicy#package}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.property.repo"></a>

```go
Repo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterPolicyLibrariesCranOutputReference <a name="ClusterPolicyLibrariesCranOutputReference" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/clusterpolicy"

clusterpolicy.NewClusterPolicyLibrariesCranOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterPolicyLibrariesCranOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resetRepo"></a>

```go
func ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.packageInput">PackageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.repoInput">RepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.package">Package</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.repo">Repo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PackageInput`<sup>Optional</sup> <a name="PackageInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.packageInput"></a>

```go
func PackageInput() *string
```

- *Type:* *string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.repoInput"></a>

```go
func RepoInput() *string
```

- *Type:* *string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.package"></a>

```go
func Package() *string
```

- *Type:* *string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.repo"></a>

```go
func Repo() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterPolicyLibrariesCran
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a>

---


### ClusterPolicyLibrariesList <a name="ClusterPolicyLibrariesList" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/clusterpolicy"

clusterpolicy.NewClusterPolicyLibrariesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClusterPolicyLibrariesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.get"></a>

```go
func Get(index *f64) ClusterPolicyLibrariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClusterPolicyLibrariesMavenOutputReference <a name="ClusterPolicyLibrariesMavenOutputReference" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/clusterpolicy"

clusterpolicy.NewClusterPolicyLibrariesMavenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterPolicyLibrariesMavenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resetExclusions"></a>

```go
func ResetExclusions()
```

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resetRepo"></a>

```go
func ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.coordinatesInput">CoordinatesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.repoInput">RepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.coordinates">Coordinates</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.repo">Repo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoordinatesInput`<sup>Optional</sup> <a name="CoordinatesInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.coordinatesInput"></a>

```go
func CoordinatesInput() *string
```

- *Type:* *string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.exclusionsInput"></a>

```go
func ExclusionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.repoInput"></a>

```go
func RepoInput() *string
```

- *Type:* *string

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.coordinates"></a>

```go
func Coordinates() *string
```

- *Type:* *string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.exclusions"></a>

```go
func Exclusions() *[]*string
```

- *Type:* *[]*string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.repo"></a>

```go
func Repo() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterPolicyLibrariesMaven
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a>

---


### ClusterPolicyLibrariesOutputReference <a name="ClusterPolicyLibrariesOutputReference" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/clusterpolicy"

clusterpolicy.NewClusterPolicyLibrariesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClusterPolicyLibrariesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putCran">PutCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putMaven">PutMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putPypi">PutPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetCran">ResetCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetEgg">ResetEgg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetJar">ResetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetMaven">ResetMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetPypi">ResetPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetRequirements">ResetRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetWhl">ResetWhl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCran` <a name="PutCran" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putCran"></a>

```go
func PutCran(value ClusterPolicyLibrariesCran)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putCran.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a>

---

##### `PutMaven` <a name="PutMaven" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putMaven"></a>

```go
func PutMaven(value ClusterPolicyLibrariesMaven)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putMaven.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a>

---

##### `PutPypi` <a name="PutPypi" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putPypi"></a>

```go
func PutPypi(value ClusterPolicyLibrariesPypi)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putPypi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a>

---

##### `ResetCran` <a name="ResetCran" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetCran"></a>

```go
func ResetCran()
```

##### `ResetEgg` <a name="ResetEgg" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetEgg"></a>

```go
func ResetEgg()
```

##### `ResetJar` <a name="ResetJar" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetJar"></a>

```go
func ResetJar()
```

##### `ResetMaven` <a name="ResetMaven" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetMaven"></a>

```go
func ResetMaven()
```

##### `ResetPypi` <a name="ResetPypi" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetPypi"></a>

```go
func ResetPypi()
```

##### `ResetRequirements` <a name="ResetRequirements" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetRequirements"></a>

```go
func ResetRequirements()
```

##### `ResetWhl` <a name="ResetWhl" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetWhl"></a>

```go
func ResetWhl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.cran">Cran</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference">ClusterPolicyLibrariesCranOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.maven">Maven</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference">ClusterPolicyLibrariesMavenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.pypi">Pypi</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference">ClusterPolicyLibrariesPypiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.cranInput">CranInput</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.eggInput">EggInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.jarInput">JarInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.mavenInput">MavenInput</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.pypiInput">PypiInput</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.requirementsInput">RequirementsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.whlInput">WhlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.egg">Egg</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.jar">Jar</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.requirements">Requirements</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.whl">Whl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cran`<sup>Required</sup> <a name="Cran" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.cran"></a>

```go
func Cran() ClusterPolicyLibrariesCranOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference">ClusterPolicyLibrariesCranOutputReference</a>

---

##### `Maven`<sup>Required</sup> <a name="Maven" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.maven"></a>

```go
func Maven() ClusterPolicyLibrariesMavenOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference">ClusterPolicyLibrariesMavenOutputReference</a>

---

##### `Pypi`<sup>Required</sup> <a name="Pypi" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.pypi"></a>

```go
func Pypi() ClusterPolicyLibrariesPypiOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference">ClusterPolicyLibrariesPypiOutputReference</a>

---

##### `CranInput`<sup>Optional</sup> <a name="CranInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.cranInput"></a>

```go
func CranInput() ClusterPolicyLibrariesCran
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a>

---

##### `EggInput`<sup>Optional</sup> <a name="EggInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.eggInput"></a>

```go
func EggInput() *string
```

- *Type:* *string

---

##### `JarInput`<sup>Optional</sup> <a name="JarInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.jarInput"></a>

```go
func JarInput() *string
```

- *Type:* *string

---

##### `MavenInput`<sup>Optional</sup> <a name="MavenInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.mavenInput"></a>

```go
func MavenInput() ClusterPolicyLibrariesMaven
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a>

---

##### `PypiInput`<sup>Optional</sup> <a name="PypiInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.pypiInput"></a>

```go
func PypiInput() ClusterPolicyLibrariesPypi
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a>

---

##### `RequirementsInput`<sup>Optional</sup> <a name="RequirementsInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.requirementsInput"></a>

```go
func RequirementsInput() *string
```

- *Type:* *string

---

##### `WhlInput`<sup>Optional</sup> <a name="WhlInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.whlInput"></a>

```go
func WhlInput() *string
```

- *Type:* *string

---

##### `Egg`<sup>Required</sup> <a name="Egg" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.egg"></a>

```go
func Egg() *string
```

- *Type:* *string

---

##### `Jar`<sup>Required</sup> <a name="Jar" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.jar"></a>

```go
func Jar() *string
```

- *Type:* *string

---

##### `Requirements`<sup>Required</sup> <a name="Requirements" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.requirements"></a>

```go
func Requirements() *string
```

- *Type:* *string

---

##### `Whl`<sup>Required</sup> <a name="Whl" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.whl"></a>

```go
func Whl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClusterPolicyLibrariesPypiOutputReference <a name="ClusterPolicyLibrariesPypiOutputReference" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/clusterpolicy"

clusterpolicy.NewClusterPolicyLibrariesPypiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterPolicyLibrariesPypiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resetRepo"></a>

```go
func ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.packageInput">PackageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.repoInput">RepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.package">Package</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.repo">Repo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PackageInput`<sup>Optional</sup> <a name="PackageInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.packageInput"></a>

```go
func PackageInput() *string
```

- *Type:* *string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.repoInput"></a>

```go
func RepoInput() *string
```

- *Type:* *string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.package"></a>

```go
func Package() *string
```

- *Type:* *string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.repo"></a>

```go
func Repo() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterPolicyLibrariesPypi
```

- *Type:* <a href="#@cdktf/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a>

---



