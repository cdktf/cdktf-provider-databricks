# `group` Submodule <a name="`group` Submodule" id="@cdktf/provider-databricks.group"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Group <a name="Group" id="@cdktf/provider-databricks.group.Group"></a>

Represents a {@link https://www.terraform.io/docs/providers/databricks/r/group databricks_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.group.Group.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/group"

group.NewGroup(scope Construct, id *string, config GroupConfig) Group
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.group.Group.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.group.Group.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.group.Group.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.group.GroupConfig">GroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.group.Group.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.group.Group.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.group.Group.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.group.GroupConfig">GroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.group.Group.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.group.Group.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.group.Group.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.group.Group.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.group.Group.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.resetAllowClusterCreate">ResetAllowClusterCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.resetAllowInstancePoolCreate">ResetAllowInstancePoolCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.resetDatabricksSqlAccess">ResetDatabricksSqlAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.resetForce">ResetForce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.resetWorkspaceAccess">ResetWorkspaceAccess</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.group.Group.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.group.Group.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.group.Group.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.group.Group.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.group.Group.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.group.Group.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.group.Group.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.group.Group.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.group.Group.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.group.Group.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.group.Group.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.group.Group.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.group.Group.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.group.Group.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.group.Group.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.group.Group.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.group.Group.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.group.Group.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.group.Group.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.group.Group.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.group.Group.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.group.Group.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.group.Group.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.group.Group.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.group.Group.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.group.Group.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.group.Group.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.group.Group.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.group.Group.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAllowClusterCreate` <a name="ResetAllowClusterCreate" id="@cdktf/provider-databricks.group.Group.resetAllowClusterCreate"></a>

```go
func ResetAllowClusterCreate()
```

##### `ResetAllowInstancePoolCreate` <a name="ResetAllowInstancePoolCreate" id="@cdktf/provider-databricks.group.Group.resetAllowInstancePoolCreate"></a>

```go
func ResetAllowInstancePoolCreate()
```

##### `ResetDatabricksSqlAccess` <a name="ResetDatabricksSqlAccess" id="@cdktf/provider-databricks.group.Group.resetDatabricksSqlAccess"></a>

```go
func ResetDatabricksSqlAccess()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktf/provider-databricks.group.Group.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetForce` <a name="ResetForce" id="@cdktf/provider-databricks.group.Group.resetForce"></a>

```go
func ResetForce()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.group.Group.resetId"></a>

```go
func ResetId()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-databricks.group.Group.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetWorkspaceAccess` <a name="ResetWorkspaceAccess" id="@cdktf/provider-databricks.group.Group.resetWorkspaceAccess"></a>

```go
func ResetWorkspaceAccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.group.Group.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.group.Group.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.group.Group.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/group"

group.Group_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.group.Group.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.group.Group.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/group"

group.Group_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.group.Group.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.group.Group.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/group"

group.Group_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.group.Group.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.allowClusterCreateInput">AllowClusterCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.allowInstancePoolCreateInput">AllowInstancePoolCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.databricksSqlAccessInput">DatabricksSqlAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.forceInput">ForceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.workspaceAccessInput">WorkspaceAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.allowClusterCreate">AllowClusterCreate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.allowInstancePoolCreate">AllowInstancePoolCreate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.databricksSqlAccess">DatabricksSqlAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.force">Force</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.workspaceAccess">WorkspaceAccess</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.group.Group.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.group.Group.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.group.Group.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.group.Group.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.group.Group.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.group.Group.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.group.Group.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.group.Group.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.group.Group.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.group.Group.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.group.Group.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.group.Group.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.group.Group.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.group.Group.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowClusterCreateInput`<sup>Optional</sup> <a name="AllowClusterCreateInput" id="@cdktf/provider-databricks.group.Group.property.allowClusterCreateInput"></a>

```go
func AllowClusterCreateInput() interface{}
```

- *Type:* interface{}

---

##### `AllowInstancePoolCreateInput`<sup>Optional</sup> <a name="AllowInstancePoolCreateInput" id="@cdktf/provider-databricks.group.Group.property.allowInstancePoolCreateInput"></a>

```go
func AllowInstancePoolCreateInput() interface{}
```

- *Type:* interface{}

---

##### `DatabricksSqlAccessInput`<sup>Optional</sup> <a name="DatabricksSqlAccessInput" id="@cdktf/provider-databricks.group.Group.property.databricksSqlAccessInput"></a>

```go
func DatabricksSqlAccessInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-databricks.group.Group.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-databricks.group.Group.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `ForceInput`<sup>Optional</sup> <a name="ForceInput" id="@cdktf/provider-databricks.group.Group.property.forceInput"></a>

```go
func ForceInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.group.Group.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-databricks.group.Group.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `WorkspaceAccessInput`<sup>Optional</sup> <a name="WorkspaceAccessInput" id="@cdktf/provider-databricks.group.Group.property.workspaceAccessInput"></a>

```go
func WorkspaceAccessInput() interface{}
```

- *Type:* interface{}

---

##### `AllowClusterCreate`<sup>Required</sup> <a name="AllowClusterCreate" id="@cdktf/provider-databricks.group.Group.property.allowClusterCreate"></a>

```go
func AllowClusterCreate() interface{}
```

- *Type:* interface{}

---

##### `AllowInstancePoolCreate`<sup>Required</sup> <a name="AllowInstancePoolCreate" id="@cdktf/provider-databricks.group.Group.property.allowInstancePoolCreate"></a>

```go
func AllowInstancePoolCreate() interface{}
```

- *Type:* interface{}

---

##### `DatabricksSqlAccess`<sup>Required</sup> <a name="DatabricksSqlAccess" id="@cdktf/provider-databricks.group.Group.property.databricksSqlAccess"></a>

```go
func DatabricksSqlAccess() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.group.Group.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-databricks.group.Group.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Force`<sup>Required</sup> <a name="Force" id="@cdktf/provider-databricks.group.Group.property.force"></a>

```go
func Force() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.group.Group.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.group.Group.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `WorkspaceAccess`<sup>Required</sup> <a name="WorkspaceAccess" id="@cdktf/provider-databricks.group.Group.property.workspaceAccess"></a>

```go
func WorkspaceAccess() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.group.Group.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.group.Group.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupConfig <a name="GroupConfig" id="@cdktf/provider-databricks.group.GroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.group.GroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/group"

&group.GroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	AllowClusterCreate: interface{},
	AllowInstancePoolCreate: interface{},
	DatabricksSqlAccess: interface{},
	ExternalId: *string,
	Force: interface{},
	Id: *string,
	Url: *string,
	WorkspaceAccess: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.group.GroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.GroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.GroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.GroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.GroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.GroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.GroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.group.GroupConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#display_name Group#display_name}. |
| <code><a href="#@cdktf/provider-databricks.group.GroupConfig.property.allowClusterCreate">AllowClusterCreate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#allow_cluster_create Group#allow_cluster_create}. |
| <code><a href="#@cdktf/provider-databricks.group.GroupConfig.property.allowInstancePoolCreate">AllowInstancePoolCreate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#allow_instance_pool_create Group#allow_instance_pool_create}. |
| <code><a href="#@cdktf/provider-databricks.group.GroupConfig.property.databricksSqlAccess">DatabricksSqlAccess</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#databricks_sql_access Group#databricks_sql_access}. |
| <code><a href="#@cdktf/provider-databricks.group.GroupConfig.property.externalId">ExternalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#external_id Group#external_id}. |
| <code><a href="#@cdktf/provider-databricks.group.GroupConfig.property.force">Force</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#force Group#force}. |
| <code><a href="#@cdktf/provider-databricks.group.GroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#id Group#id}. |
| <code><a href="#@cdktf/provider-databricks.group.GroupConfig.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#url Group#url}. |
| <code><a href="#@cdktf/provider-databricks.group.GroupConfig.property.workspaceAccess">WorkspaceAccess</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#workspace_access Group#workspace_access}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.group.GroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.group.GroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.group.GroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.group.GroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.group.GroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.group.GroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.group.GroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.group.GroupConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#display_name Group#display_name}.

---

##### `AllowClusterCreate`<sup>Optional</sup> <a name="AllowClusterCreate" id="@cdktf/provider-databricks.group.GroupConfig.property.allowClusterCreate"></a>

```go
AllowClusterCreate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#allow_cluster_create Group#allow_cluster_create}.

---

##### `AllowInstancePoolCreate`<sup>Optional</sup> <a name="AllowInstancePoolCreate" id="@cdktf/provider-databricks.group.GroupConfig.property.allowInstancePoolCreate"></a>

```go
AllowInstancePoolCreate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#allow_instance_pool_create Group#allow_instance_pool_create}.

---

##### `DatabricksSqlAccess`<sup>Optional</sup> <a name="DatabricksSqlAccess" id="@cdktf/provider-databricks.group.GroupConfig.property.databricksSqlAccess"></a>

```go
DatabricksSqlAccess interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#databricks_sql_access Group#databricks_sql_access}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-databricks.group.GroupConfig.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#external_id Group#external_id}.

---

##### `Force`<sup>Optional</sup> <a name="Force" id="@cdktf/provider-databricks.group.GroupConfig.property.force"></a>

```go
Force interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#force Group#force}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.group.GroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-databricks.group.GroupConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#url Group#url}.

---

##### `WorkspaceAccess`<sup>Optional</sup> <a name="WorkspaceAccess" id="@cdktf/provider-databricks.group.GroupConfig.property.workspaceAccess"></a>

```go
WorkspaceAccess interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group#workspace_access Group#workspace_access}.

---


