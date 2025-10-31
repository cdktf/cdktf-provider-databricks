# `accountNetworkPolicy` Submodule <a name="`accountNetworkPolicy` Submodule" id="@cdktf/provider-databricks.accountNetworkPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountNetworkPolicy <a name="AccountNetworkPolicy" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy databricks_account_network_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/accountnetworkpolicy"

accountnetworkpolicy.NewAccountNetworkPolicy(scope Construct, id *string, config AccountNetworkPolicyConfig) AccountNetworkPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig">AccountNetworkPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig">AccountNetworkPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.putEgress">PutEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetEgress">ResetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetNetworkPolicyId">ResetNetworkPolicyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEgress` <a name="PutEgress" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.putEgress"></a>

```go
func PutEgress(value AccountNetworkPolicyEgress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.putEgress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress">AccountNetworkPolicyEgress</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetEgress` <a name="ResetEgress" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetEgress"></a>

```go
func ResetEgress()
```

##### `ResetNetworkPolicyId` <a name="ResetNetworkPolicyId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetNetworkPolicyId"></a>

```go
func ResetNetworkPolicyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccountNetworkPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/accountnetworkpolicy"

accountnetworkpolicy.AccountNetworkPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/accountnetworkpolicy"

accountnetworkpolicy.AccountNetworkPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/accountnetworkpolicy"

accountnetworkpolicy.AccountNetworkPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/accountnetworkpolicy"

accountnetworkpolicy.AccountNetworkPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AccountNetworkPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AccountNetworkPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AccountNetworkPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AccountNetworkPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.egress">Egress</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference">AccountNetworkPolicyEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.egressInput">EgressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.networkPolicyIdInput">NetworkPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.networkPolicyId">NetworkPolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.egress"></a>

```go
func Egress() AccountNetworkPolicyEgressOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference">AccountNetworkPolicyEgressOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `EgressInput`<sup>Optional</sup> <a name="EgressInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.egressInput"></a>

```go
func EgressInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkPolicyIdInput`<sup>Optional</sup> <a name="NetworkPolicyIdInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.networkPolicyIdInput"></a>

```go
func NetworkPolicyIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `NetworkPolicyId`<sup>Required</sup> <a name="NetworkPolicyId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.networkPolicyId"></a>

```go
func NetworkPolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountNetworkPolicyConfig <a name="AccountNetworkPolicyConfig" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/accountnetworkpolicy"

&accountnetworkpolicy.AccountNetworkPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Egress: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.accountNetworkPolicy.AccountNetworkPolicyEgress,
	NetworkPolicyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#account_id AccountNetworkPolicy#account_id}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.egress">Egress</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress">AccountNetworkPolicyEgress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#egress AccountNetworkPolicy#egress}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.networkPolicyId">NetworkPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#network_policy_id AccountNetworkPolicy#network_policy_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#account_id AccountNetworkPolicy#account_id}.

---

##### `Egress`<sup>Optional</sup> <a name="Egress" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.egress"></a>

```go
Egress AccountNetworkPolicyEgress
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress">AccountNetworkPolicyEgress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#egress AccountNetworkPolicy#egress}.

---

##### `NetworkPolicyId`<sup>Optional</sup> <a name="NetworkPolicyId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.networkPolicyId"></a>

```go
NetworkPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#network_policy_id AccountNetworkPolicy#network_policy_id}.

---

### AccountNetworkPolicyEgress <a name="AccountNetworkPolicyEgress" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/accountnetworkpolicy"

&accountnetworkpolicy.AccountNetworkPolicyEgress {
	NetworkAccess: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress.property.networkAccess">NetworkAccess</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess">AccountNetworkPolicyEgressNetworkAccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#network_access AccountNetworkPolicy#network_access}. |

---

##### `NetworkAccess`<sup>Optional</sup> <a name="NetworkAccess" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress.property.networkAccess"></a>

```go
NetworkAccess AccountNetworkPolicyEgressNetworkAccess
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess">AccountNetworkPolicyEgressNetworkAccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#network_access AccountNetworkPolicy#network_access}.

---

### AccountNetworkPolicyEgressNetworkAccess <a name="AccountNetworkPolicyEgressNetworkAccess" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/accountnetworkpolicy"

&accountnetworkpolicy.AccountNetworkPolicyEgressNetworkAccess {
	RestrictionMode: *string,
	AllowedInternetDestinations: interface{},
	AllowedStorageDestinations: interface{},
	PolicyEnforcement: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.restrictionMode">RestrictionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#restriction_mode AccountNetworkPolicy#restriction_mode}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.allowedInternetDestinations">AllowedInternetDestinations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#allowed_internet_destinations AccountNetworkPolicy#allowed_internet_destinations}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.allowedStorageDestinations">AllowedStorageDestinations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#allowed_storage_destinations AccountNetworkPolicy#allowed_storage_destinations}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.policyEnforcement">PolicyEnforcement</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#policy_enforcement AccountNetworkPolicy#policy_enforcement}. |

---

##### `RestrictionMode`<sup>Required</sup> <a name="RestrictionMode" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.restrictionMode"></a>

```go
RestrictionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#restriction_mode AccountNetworkPolicy#restriction_mode}.

---

##### `AllowedInternetDestinations`<sup>Optional</sup> <a name="AllowedInternetDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.allowedInternetDestinations"></a>

```go
AllowedInternetDestinations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#allowed_internet_destinations AccountNetworkPolicy#allowed_internet_destinations}.

---

##### `AllowedStorageDestinations`<sup>Optional</sup> <a name="AllowedStorageDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.allowedStorageDestinations"></a>

```go
AllowedStorageDestinations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#allowed_storage_destinations AccountNetworkPolicy#allowed_storage_destinations}.

---

##### `PolicyEnforcement`<sup>Optional</sup> <a name="PolicyEnforcement" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.policyEnforcement"></a>

```go
PolicyEnforcement AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#policy_enforcement AccountNetworkPolicy#policy_enforcement}.

---

### AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations <a name="AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/accountnetworkpolicy"

&accountnetworkpolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations {
	Destination: *string,
	InternetDestinationType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.property.internetDestinationType">InternetDestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#internet_destination_type AccountNetworkPolicy#internet_destination_type}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}.

---

##### `InternetDestinationType`<sup>Optional</sup> <a name="InternetDestinationType" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.property.internetDestinationType"></a>

```go
InternetDestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#internet_destination_type AccountNetworkPolicy#internet_destination_type}.

---

### AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations <a name="AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/accountnetworkpolicy"

&accountnetworkpolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations {
	AzureStorageAccount: *string,
	AzureStorageService: *string,
	BucketName: *string,
	Region: *string,
	StorageDestinationType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.azureStorageAccount">AzureStorageAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#azure_storage_account AccountNetworkPolicy#azure_storage_account}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.azureStorageService">AzureStorageService</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#azure_storage_service AccountNetworkPolicy#azure_storage_service}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#bucket_name AccountNetworkPolicy#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#region AccountNetworkPolicy#region}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.storageDestinationType">StorageDestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#storage_destination_type AccountNetworkPolicy#storage_destination_type}. |

---

##### `AzureStorageAccount`<sup>Optional</sup> <a name="AzureStorageAccount" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.azureStorageAccount"></a>

```go
AzureStorageAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#azure_storage_account AccountNetworkPolicy#azure_storage_account}.

---

##### `AzureStorageService`<sup>Optional</sup> <a name="AzureStorageService" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.azureStorageService"></a>

```go
AzureStorageService *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#azure_storage_service AccountNetworkPolicy#azure_storage_service}.

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#bucket_name AccountNetworkPolicy#bucket_name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#region AccountNetworkPolicy#region}.

---

##### `StorageDestinationType`<sup>Optional</sup> <a name="StorageDestinationType" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.storageDestinationType"></a>

```go
StorageDestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#storage_destination_type AccountNetworkPolicy#storage_destination_type}.

---

### AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement <a name="AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/accountnetworkpolicy"

&accountnetworkpolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement {
	DryRunModeProductFilter: *[]*string,
	EnforcementMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.property.dryRunModeProductFilter">DryRunModeProductFilter</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#dry_run_mode_product_filter AccountNetworkPolicy#dry_run_mode_product_filter}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.property.enforcementMode">EnforcementMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#enforcement_mode AccountNetworkPolicy#enforcement_mode}. |

---

##### `DryRunModeProductFilter`<sup>Optional</sup> <a name="DryRunModeProductFilter" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.property.dryRunModeProductFilter"></a>

```go
DryRunModeProductFilter *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#dry_run_mode_product_filter AccountNetworkPolicy#dry_run_mode_product_filter}.

---

##### `EnforcementMode`<sup>Optional</sup> <a name="EnforcementMode" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.property.enforcementMode"></a>

```go
EnforcementMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/account_network_policy#enforcement_mode AccountNetworkPolicy#enforcement_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList <a name="AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/accountnetworkpolicy"

accountnetworkpolicy.NewAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.get"></a>

```go
func Get(index *f64) AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference <a name="AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/accountnetworkpolicy"

accountnetworkpolicy.NewAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetInternetDestinationType">ResetInternetDestinationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetInternetDestinationType` <a name="ResetInternetDestinationType" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetInternetDestinationType"></a>

```go
func ResetInternetDestinationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationTypeInput">InternetDestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationType">InternetDestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `InternetDestinationTypeInput`<sup>Optional</sup> <a name="InternetDestinationTypeInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationTypeInput"></a>

```go
func InternetDestinationTypeInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternetDestinationType`<sup>Required</sup> <a name="InternetDestinationType" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationType"></a>

```go
func InternetDestinationType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList <a name="AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/accountnetworkpolicy"

accountnetworkpolicy.NewAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.get"></a>

```go
func Get(index *f64) AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference <a name="AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/accountnetworkpolicy"

accountnetworkpolicy.NewAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount">ResetAzureStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService">ResetAzureStorageService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetStorageDestinationType">ResetStorageDestinationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAzureStorageAccount` <a name="ResetAzureStorageAccount" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount"></a>

```go
func ResetAzureStorageAccount()
```

##### `ResetAzureStorageService` <a name="ResetAzureStorageService" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService"></a>

```go
func ResetAzureStorageService()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStorageDestinationType` <a name="ResetStorageDestinationType" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetStorageDestinationType"></a>

```go
func ResetStorageDestinationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput">AzureStorageAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput">AzureStorageServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationTypeInput">StorageDestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount">AzureStorageAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageService">AzureStorageService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationType">StorageDestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureStorageAccountInput`<sup>Optional</sup> <a name="AzureStorageAccountInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput"></a>

```go
func AzureStorageAccountInput() *string
```

- *Type:* *string

---

##### `AzureStorageServiceInput`<sup>Optional</sup> <a name="AzureStorageServiceInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput"></a>

```go
func AzureStorageServiceInput() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `StorageDestinationTypeInput`<sup>Optional</sup> <a name="StorageDestinationTypeInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationTypeInput"></a>

```go
func StorageDestinationTypeInput() *string
```

- *Type:* *string

---

##### `AzureStorageAccount`<sup>Required</sup> <a name="AzureStorageAccount" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount"></a>

```go
func AzureStorageAccount() *string
```

- *Type:* *string

---

##### `AzureStorageService`<sup>Required</sup> <a name="AzureStorageService" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageService"></a>

```go
func AzureStorageService() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `StorageDestinationType`<sup>Required</sup> <a name="StorageDestinationType" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationType"></a>

```go
func StorageDestinationType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccountNetworkPolicyEgressNetworkAccessOutputReference <a name="AccountNetworkPolicyEgressNetworkAccessOutputReference" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/accountnetworkpolicy"

accountnetworkpolicy.NewAccountNetworkPolicyEgressNetworkAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccountNetworkPolicyEgressNetworkAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedInternetDestinations">PutAllowedInternetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedStorageDestinations">PutAllowedStorageDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putPolicyEnforcement">PutPolicyEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resetAllowedInternetDestinations">ResetAllowedInternetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resetAllowedStorageDestinations">ResetAllowedStorageDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resetPolicyEnforcement">ResetPolicyEnforcement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedInternetDestinations` <a name="PutAllowedInternetDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedInternetDestinations"></a>

```go
func PutAllowedInternetDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedInternetDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAllowedStorageDestinations` <a name="PutAllowedStorageDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedStorageDestinations"></a>

```go
func PutAllowedStorageDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedStorageDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPolicyEnforcement` <a name="PutPolicyEnforcement" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putPolicyEnforcement"></a>

```go
func PutPolicyEnforcement(value AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putPolicyEnforcement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a>

---

##### `ResetAllowedInternetDestinations` <a name="ResetAllowedInternetDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resetAllowedInternetDestinations"></a>

```go
func ResetAllowedInternetDestinations()
```

##### `ResetAllowedStorageDestinations` <a name="ResetAllowedStorageDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resetAllowedStorageDestinations"></a>

```go
func ResetAllowedStorageDestinations()
```

##### `ResetPolicyEnforcement` <a name="ResetPolicyEnforcement" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resetPolicyEnforcement"></a>

```go
func ResetPolicyEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedInternetDestinations">AllowedInternetDestinations</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedStorageDestinations">AllowedStorageDestinations</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.policyEnforcement">PolicyEnforcement</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedInternetDestinationsInput">AllowedInternetDestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedStorageDestinationsInput">AllowedStorageDestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.policyEnforcementInput">PolicyEnforcementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.restrictionModeInput">RestrictionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.restrictionMode">RestrictionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedInternetDestinations`<sup>Required</sup> <a name="AllowedInternetDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedInternetDestinations"></a>

```go
func AllowedInternetDestinations() AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList</a>

---

##### `AllowedStorageDestinations`<sup>Required</sup> <a name="AllowedStorageDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedStorageDestinations"></a>

```go
func AllowedStorageDestinations() AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList</a>

---

##### `PolicyEnforcement`<sup>Required</sup> <a name="PolicyEnforcement" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.policyEnforcement"></a>

```go
func PolicyEnforcement() AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference</a>

---

##### `AllowedInternetDestinationsInput`<sup>Optional</sup> <a name="AllowedInternetDestinationsInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedInternetDestinationsInput"></a>

```go
func AllowedInternetDestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedStorageDestinationsInput`<sup>Optional</sup> <a name="AllowedStorageDestinationsInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedStorageDestinationsInput"></a>

```go
func AllowedStorageDestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyEnforcementInput`<sup>Optional</sup> <a name="PolicyEnforcementInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.policyEnforcementInput"></a>

```go
func PolicyEnforcementInput() interface{}
```

- *Type:* interface{}

---

##### `RestrictionModeInput`<sup>Optional</sup> <a name="RestrictionModeInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.restrictionModeInput"></a>

```go
func RestrictionModeInput() *string
```

- *Type:* *string

---

##### `RestrictionMode`<sup>Required</sup> <a name="RestrictionMode" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.restrictionMode"></a>

```go
func RestrictionMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference <a name="AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/accountnetworkpolicy"

accountnetworkpolicy.NewAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resetDryRunModeProductFilter">ResetDryRunModeProductFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resetEnforcementMode">ResetEnforcementMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDryRunModeProductFilter` <a name="ResetDryRunModeProductFilter" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resetDryRunModeProductFilter"></a>

```go
func ResetDryRunModeProductFilter()
```

##### `ResetEnforcementMode` <a name="ResetEnforcementMode" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resetEnforcementMode"></a>

```go
func ResetEnforcementMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilterInput">DryRunModeProductFilterInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementModeInput">EnforcementModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilter">DryRunModeProductFilter</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementMode">EnforcementMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DryRunModeProductFilterInput`<sup>Optional</sup> <a name="DryRunModeProductFilterInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilterInput"></a>

```go
func DryRunModeProductFilterInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnforcementModeInput`<sup>Optional</sup> <a name="EnforcementModeInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementModeInput"></a>

```go
func EnforcementModeInput() *string
```

- *Type:* *string

---

##### `DryRunModeProductFilter`<sup>Required</sup> <a name="DryRunModeProductFilter" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilter"></a>

```go
func DryRunModeProductFilter() *[]*string
```

- *Type:* *[]*string

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementMode"></a>

```go
func EnforcementMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccountNetworkPolicyEgressOutputReference <a name="AccountNetworkPolicyEgressOutputReference" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/accountnetworkpolicy"

accountnetworkpolicy.NewAccountNetworkPolicyEgressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccountNetworkPolicyEgressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.putNetworkAccess">PutNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.resetNetworkAccess">ResetNetworkAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkAccess` <a name="PutNetworkAccess" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.putNetworkAccess"></a>

```go
func PutNetworkAccess(value AccountNetworkPolicyEgressNetworkAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.putNetworkAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess">AccountNetworkPolicyEgressNetworkAccess</a>

---

##### `ResetNetworkAccess` <a name="ResetNetworkAccess" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.resetNetworkAccess"></a>

```go
func ResetNetworkAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.networkAccess">NetworkAccess</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference">AccountNetworkPolicyEgressNetworkAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.networkAccessInput">NetworkAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkAccess`<sup>Required</sup> <a name="NetworkAccess" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.networkAccess"></a>

```go
func NetworkAccess() AccountNetworkPolicyEgressNetworkAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference">AccountNetworkPolicyEgressNetworkAccessOutputReference</a>

---

##### `NetworkAccessInput`<sup>Optional</sup> <a name="NetworkAccessInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.networkAccessInput"></a>

```go
func NetworkAccessInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



