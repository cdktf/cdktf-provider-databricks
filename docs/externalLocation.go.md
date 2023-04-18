# `databricks_external_location`

Refer to the Terraform Registory for docs: [`databricks_external_location`](https://www.terraform.io/docs/providers/databricks/r/external_location).

# `externalLocation` Submodule <a name="`externalLocation` Submodule" id="@cdktf/provider-databricks.externalLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalLocation <a name="ExternalLocation" id="@cdktf/provider-databricks.externalLocation.ExternalLocation"></a>

Represents a {@link https://www.terraform.io/docs/providers/databricks/r/external_location databricks_external_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v6/externallocation"

externallocation.NewExternalLocation(scope Construct, id *string, config ExternalLocationConfig) ExternalLocation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig">ExternalLocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig">ExternalLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetSkipValidation">ResetSkipValidation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetId"></a>

```go
func ResetId()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetMetastoreId"></a>

```go
func ResetMetastoreId()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetSkipValidation` <a name="ResetSkipValidation" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetSkipValidation"></a>

```go
func ResetSkipValidation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v6/externallocation"

externallocation.ExternalLocation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v6/externallocation"

externallocation.ExternalLocation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v6/externallocation"

externallocation.ExternalLocation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialNameInput">CredentialNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidationInput">SkipValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialName">CredentialName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidation">SkipValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CredentialNameInput`<sup>Optional</sup> <a name="CredentialNameInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialNameInput"></a>

```go
func CredentialNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreIdInput"></a>

```go
func MetastoreIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `SkipValidationInput`<sup>Optional</sup> <a name="SkipValidationInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidationInput"></a>

```go
func SkipValidationInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialName"></a>

```go
func CredentialName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `SkipValidation`<sup>Required</sup> <a name="SkipValidation" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidation"></a>

```go
func SkipValidation() interface{}
```

- *Type:* interface{}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalLocationConfig <a name="ExternalLocationConfig" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v6/externallocation"

&externallocation.ExternalLocationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CredentialName: *string,
	Name: *string,
	Url: *string,
	Comment: *string,
	Id: *string,
	MetastoreId: *string,
	Owner: *string,
	SkipValidation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.credentialName">CredentialName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/external_location#credential_name ExternalLocation#credential_name}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/external_location#name ExternalLocation#name}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/external_location#url ExternalLocation#url}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/external_location#comment ExternalLocation#comment}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/external_location#id ExternalLocation#id}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/external_location#metastore_id ExternalLocation#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/external_location#owner ExternalLocation#owner}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.skipValidation">SkipValidation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/external_location#skip_validation ExternalLocation#skip_validation}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.credentialName"></a>

```go
CredentialName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/external_location#credential_name ExternalLocation#credential_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/external_location#name ExternalLocation#name}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/external_location#url ExternalLocation#url}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/external_location#comment ExternalLocation#comment}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/external_location#id ExternalLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.metastoreId"></a>

```go
MetastoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/external_location#metastore_id ExternalLocation#metastore_id}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/external_location#owner ExternalLocation#owner}.

---

##### `SkipValidation`<sup>Optional</sup> <a name="SkipValidation" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.skipValidation"></a>

```go
SkipValidation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/external_location#skip_validation ExternalLocation#skip_validation}.

---



