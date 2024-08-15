# `servicePrincipal` Submodule <a name="`servicePrincipal` Submodule" id="@cdktf/provider-databricks.servicePrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipal <a name="ServicePrincipal" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal databricks_service_principal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/serviceprincipal"

serviceprincipal.NewServicePrincipal(scope Construct, id *string, config ServicePrincipalConfig) ServicePrincipal
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig">ServicePrincipalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig">ServicePrincipalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetAclPrincipalId">ResetAclPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowClusterCreate">ResetAllowClusterCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowInstancePoolCreate">ResetAllowInstancePoolCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetDatabricksSqlAccess">ResetDatabricksSqlAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetDisableAsUserDeletion">ResetDisableAsUserDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetForce">ResetForce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteHomeDir">ResetForceDeleteHomeDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteRepos">ResetForceDeleteRepos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetHome">ResetHome</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetRepos">ResetRepos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetWorkspaceAccess">ResetWorkspaceAccess</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAclPrincipalId` <a name="ResetAclPrincipalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetAclPrincipalId"></a>

```go
func ResetAclPrincipalId()
```

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetActive"></a>

```go
func ResetActive()
```

##### `ResetAllowClusterCreate` <a name="ResetAllowClusterCreate" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowClusterCreate"></a>

```go
func ResetAllowClusterCreate()
```

##### `ResetAllowInstancePoolCreate` <a name="ResetAllowInstancePoolCreate" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowInstancePoolCreate"></a>

```go
func ResetAllowInstancePoolCreate()
```

##### `ResetApplicationId` <a name="ResetApplicationId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetApplicationId"></a>

```go
func ResetApplicationId()
```

##### `ResetDatabricksSqlAccess` <a name="ResetDatabricksSqlAccess" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetDatabricksSqlAccess"></a>

```go
func ResetDatabricksSqlAccess()
```

##### `ResetDisableAsUserDeletion` <a name="ResetDisableAsUserDeletion" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetDisableAsUserDeletion"></a>

```go
func ResetDisableAsUserDeletion()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetForce` <a name="ResetForce" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetForce"></a>

```go
func ResetForce()
```

##### `ResetForceDeleteHomeDir` <a name="ResetForceDeleteHomeDir" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteHomeDir"></a>

```go
func ResetForceDeleteHomeDir()
```

##### `ResetForceDeleteRepos` <a name="ResetForceDeleteRepos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteRepos"></a>

```go
func ResetForceDeleteRepos()
```

##### `ResetHome` <a name="ResetHome" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetHome"></a>

```go
func ResetHome()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetId"></a>

```go
func ResetId()
```

##### `ResetRepos` <a name="ResetRepos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetRepos"></a>

```go
func ResetRepos()
```

##### `ResetWorkspaceAccess` <a name="ResetWorkspaceAccess" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.resetWorkspaceAccess"></a>

```go
func ResetWorkspaceAccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServicePrincipal resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/serviceprincipal"

serviceprincipal.ServicePrincipal_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/serviceprincipal"

serviceprincipal.ServicePrincipal_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/serviceprincipal"

serviceprincipal.ServicePrincipal_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/serviceprincipal"

serviceprincipal.ServicePrincipal_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ServicePrincipal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServicePrincipal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServicePrincipal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalIdInput">AclPrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.activeInput">ActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreateInput">AllowClusterCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreateInput">AllowInstancePoolCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccessInput">DatabricksSqlAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletionInput">DisableAsUserDeletionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDirInput">ForceDeleteHomeDirInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteReposInput">ForceDeleteReposInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceInput">ForceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.homeInput">HomeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.reposInput">ReposInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccessInput">WorkspaceAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalId">AclPrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.active">Active</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreate">AllowClusterCreate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreate">AllowInstancePoolCreate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccess">DatabricksSqlAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletion">DisableAsUserDeletion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.force">Force</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDir">ForceDeleteHomeDir</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteRepos">ForceDeleteRepos</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.home">Home</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.repos">Repos</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccess">WorkspaceAccess</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AclPrincipalIdInput`<sup>Optional</sup> <a name="AclPrincipalIdInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalIdInput"></a>

```go
func AclPrincipalIdInput() *string
```

- *Type:* *string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.activeInput"></a>

```go
func ActiveInput() interface{}
```

- *Type:* interface{}

---

##### `AllowClusterCreateInput`<sup>Optional</sup> <a name="AllowClusterCreateInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreateInput"></a>

```go
func AllowClusterCreateInput() interface{}
```

- *Type:* interface{}

---

##### `AllowInstancePoolCreateInput`<sup>Optional</sup> <a name="AllowInstancePoolCreateInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreateInput"></a>

```go
func AllowInstancePoolCreateInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `DatabricksSqlAccessInput`<sup>Optional</sup> <a name="DatabricksSqlAccessInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccessInput"></a>

```go
func DatabricksSqlAccessInput() interface{}
```

- *Type:* interface{}

---

##### `DisableAsUserDeletionInput`<sup>Optional</sup> <a name="DisableAsUserDeletionInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletionInput"></a>

```go
func DisableAsUserDeletionInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `ForceDeleteHomeDirInput`<sup>Optional</sup> <a name="ForceDeleteHomeDirInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDirInput"></a>

```go
func ForceDeleteHomeDirInput() interface{}
```

- *Type:* interface{}

---

##### `ForceDeleteReposInput`<sup>Optional</sup> <a name="ForceDeleteReposInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteReposInput"></a>

```go
func ForceDeleteReposInput() interface{}
```

- *Type:* interface{}

---

##### `ForceInput`<sup>Optional</sup> <a name="ForceInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceInput"></a>

```go
func ForceInput() interface{}
```

- *Type:* interface{}

---

##### `HomeInput`<sup>Optional</sup> <a name="HomeInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.homeInput"></a>

```go
func HomeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ReposInput`<sup>Optional</sup> <a name="ReposInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.reposInput"></a>

```go
func ReposInput() *string
```

- *Type:* *string

---

##### `WorkspaceAccessInput`<sup>Optional</sup> <a name="WorkspaceAccessInput" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccessInput"></a>

```go
func WorkspaceAccessInput() interface{}
```

- *Type:* interface{}

---

##### `AclPrincipalId`<sup>Required</sup> <a name="AclPrincipalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalId"></a>

```go
func AclPrincipalId() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.active"></a>

```go
func Active() interface{}
```

- *Type:* interface{}

---

##### `AllowClusterCreate`<sup>Required</sup> <a name="AllowClusterCreate" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreate"></a>

```go
func AllowClusterCreate() interface{}
```

- *Type:* interface{}

---

##### `AllowInstancePoolCreate`<sup>Required</sup> <a name="AllowInstancePoolCreate" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreate"></a>

```go
func AllowInstancePoolCreate() interface{}
```

- *Type:* interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `DatabricksSqlAccess`<sup>Required</sup> <a name="DatabricksSqlAccess" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccess"></a>

```go
func DatabricksSqlAccess() interface{}
```

- *Type:* interface{}

---

##### `DisableAsUserDeletion`<sup>Required</sup> <a name="DisableAsUserDeletion" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletion"></a>

```go
func DisableAsUserDeletion() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Force`<sup>Required</sup> <a name="Force" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.force"></a>

```go
func Force() interface{}
```

- *Type:* interface{}

---

##### `ForceDeleteHomeDir`<sup>Required</sup> <a name="ForceDeleteHomeDir" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDir"></a>

```go
func ForceDeleteHomeDir() interface{}
```

- *Type:* interface{}

---

##### `ForceDeleteRepos`<sup>Required</sup> <a name="ForceDeleteRepos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteRepos"></a>

```go
func ForceDeleteRepos() interface{}
```

- *Type:* interface{}

---

##### `Home`<sup>Required</sup> <a name="Home" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.home"></a>

```go
func Home() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Repos`<sup>Required</sup> <a name="Repos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.repos"></a>

```go
func Repos() *string
```

- *Type:* *string

---

##### `WorkspaceAccess`<sup>Required</sup> <a name="WorkspaceAccess" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccess"></a>

```go
func WorkspaceAccess() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipal.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalConfig <a name="ServicePrincipalConfig" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/serviceprincipal"

&serviceprincipal.ServicePrincipalConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AclPrincipalId: *string,
	Active: interface{},
	AllowClusterCreate: interface{},
	AllowInstancePoolCreate: interface{},
	ApplicationId: *string,
	DatabricksSqlAccess: interface{},
	DisableAsUserDeletion: interface{},
	DisplayName: *string,
	ExternalId: *string,
	Force: interface{},
	ForceDeleteHomeDir: interface{},
	ForceDeleteRepos: interface{},
	Home: *string,
	Id: *string,
	Repos: *string,
	WorkspaceAccess: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.aclPrincipalId">AclPrincipalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#acl_principal_id ServicePrincipal#acl_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.active">Active</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#active ServicePrincipal#active}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowClusterCreate">AllowClusterCreate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#allow_cluster_create ServicePrincipal#allow_cluster_create}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowInstancePoolCreate">AllowInstancePoolCreate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#allow_instance_pool_create ServicePrincipal#allow_instance_pool_create}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.databricksSqlAccess">DatabricksSqlAccess</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#databricks_sql_access ServicePrincipal#databricks_sql_access}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.disableAsUserDeletion">DisableAsUserDeletion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#disable_as_user_deletion ServicePrincipal#disable_as_user_deletion}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#display_name ServicePrincipal#display_name}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.externalId">ExternalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#external_id ServicePrincipal#external_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.force">Force</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#force ServicePrincipal#force}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteHomeDir">ForceDeleteHomeDir</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#force_delete_home_dir ServicePrincipal#force_delete_home_dir}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteRepos">ForceDeleteRepos</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#force_delete_repos ServicePrincipal#force_delete_repos}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.home">Home</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#home ServicePrincipal#home}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#id ServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.repos">Repos</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#repos ServicePrincipal#repos}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.workspaceAccess">WorkspaceAccess</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#workspace_access ServicePrincipal#workspace_access}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AclPrincipalId`<sup>Optional</sup> <a name="AclPrincipalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.aclPrincipalId"></a>

```go
AclPrincipalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#acl_principal_id ServicePrincipal#acl_principal_id}.

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.active"></a>

```go
Active interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#active ServicePrincipal#active}.

---

##### `AllowClusterCreate`<sup>Optional</sup> <a name="AllowClusterCreate" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowClusterCreate"></a>

```go
AllowClusterCreate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#allow_cluster_create ServicePrincipal#allow_cluster_create}.

---

##### `AllowInstancePoolCreate`<sup>Optional</sup> <a name="AllowInstancePoolCreate" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowInstancePoolCreate"></a>

```go
AllowInstancePoolCreate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#allow_instance_pool_create ServicePrincipal#allow_instance_pool_create}.

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}.

---

##### `DatabricksSqlAccess`<sup>Optional</sup> <a name="DatabricksSqlAccess" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.databricksSqlAccess"></a>

```go
DatabricksSqlAccess interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#databricks_sql_access ServicePrincipal#databricks_sql_access}.

---

##### `DisableAsUserDeletion`<sup>Optional</sup> <a name="DisableAsUserDeletion" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.disableAsUserDeletion"></a>

```go
DisableAsUserDeletion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#disable_as_user_deletion ServicePrincipal#disable_as_user_deletion}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#display_name ServicePrincipal#display_name}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#external_id ServicePrincipal#external_id}.

---

##### `Force`<sup>Optional</sup> <a name="Force" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.force"></a>

```go
Force interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#force ServicePrincipal#force}.

---

##### `ForceDeleteHomeDir`<sup>Optional</sup> <a name="ForceDeleteHomeDir" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteHomeDir"></a>

```go
ForceDeleteHomeDir interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#force_delete_home_dir ServicePrincipal#force_delete_home_dir}.

---

##### `ForceDeleteRepos`<sup>Optional</sup> <a name="ForceDeleteRepos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteRepos"></a>

```go
ForceDeleteRepos interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#force_delete_repos ServicePrincipal#force_delete_repos}.

---

##### `Home`<sup>Optional</sup> <a name="Home" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.home"></a>

```go
Home *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#home ServicePrincipal#home}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#id ServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Repos`<sup>Optional</sup> <a name="Repos" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.repos"></a>

```go
Repos *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#repos ServicePrincipal#repos}.

---

##### `WorkspaceAccess`<sup>Optional</sup> <a name="WorkspaceAccess" id="@cdktf/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.workspaceAccess"></a>

```go
WorkspaceAccess interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/service_principal#workspace_access ServicePrincipal#workspace_access}.

---



