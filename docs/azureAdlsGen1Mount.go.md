# `databricks_azure_adls_gen1_mount`

Refer to the Terraform Registory for docs: [`databricks_azure_adls_gen1_mount`](https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount).

# `azureAdlsGen1Mount` Submodule <a name="`azureAdlsGen1Mount` Submodule" id="@cdktf/provider-databricks.azureAdlsGen1Mount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureAdlsGen1Mount <a name="AzureAdlsGen1Mount" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount databricks_azure_adls_gen1_mount}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/azureadlsgen1mount"

azureadlsgen1mount.NewAzureAdlsGen1Mount(scope Construct, id *string, config AzureAdlsGen1MountConfig) AzureAdlsGen1Mount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig">AzureAdlsGen1MountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig">AzureAdlsGen1MountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetSparkConfPrefix">ResetSparkConfPrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetClusterId"></a>

```go
func ResetClusterId()
```

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetDirectory"></a>

```go
func ResetDirectory()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetId"></a>

```go
func ResetId()
```

##### `ResetSparkConfPrefix` <a name="ResetSparkConfPrefix" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetSparkConfPrefix"></a>

```go
func ResetSparkConfPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/azureadlsgen1mount"

azureadlsgen1mount.AzureAdlsGen1Mount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/azureadlsgen1mount"

azureadlsgen1mount.AzureAdlsGen1Mount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/azureadlsgen1mount"

azureadlsgen1mount.AzureAdlsGen1Mount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKeyInput">ClientSecretKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScopeInput">ClientSecretScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directoryInput">DirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountNameInput">MountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefixInput">SparkConfPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceNameInput">StorageResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKey">ClientSecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScope">ClientSecretScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directory">Directory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountName">MountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefix">SparkConfPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceName">StorageResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretKeyInput`<sup>Optional</sup> <a name="ClientSecretKeyInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKeyInput"></a>

```go
func ClientSecretKeyInput() *string
```

- *Type:* *string

---

##### `ClientSecretScopeInput`<sup>Optional</sup> <a name="ClientSecretScopeInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScopeInput"></a>

```go
func ClientSecretScopeInput() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directoryInput"></a>

```go
func DirectoryInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MountNameInput`<sup>Optional</sup> <a name="MountNameInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountNameInput"></a>

```go
func MountNameInput() *string
```

- *Type:* *string

---

##### `SparkConfPrefixInput`<sup>Optional</sup> <a name="SparkConfPrefixInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefixInput"></a>

```go
func SparkConfPrefixInput() *string
```

- *Type:* *string

---

##### `StorageResourceNameInput`<sup>Optional</sup> <a name="StorageResourceNameInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceNameInput"></a>

```go
func StorageResourceNameInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecretKey`<sup>Required</sup> <a name="ClientSecretKey" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKey"></a>

```go
func ClientSecretKey() *string
```

- *Type:* *string

---

##### `ClientSecretScope`<sup>Required</sup> <a name="ClientSecretScope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScope"></a>

```go
func ClientSecretScope() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directory"></a>

```go
func Directory() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MountName`<sup>Required</sup> <a name="MountName" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountName"></a>

```go
func MountName() *string
```

- *Type:* *string

---

##### `SparkConfPrefix`<sup>Required</sup> <a name="SparkConfPrefix" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefix"></a>

```go
func SparkConfPrefix() *string
```

- *Type:* *string

---

##### `StorageResourceName`<sup>Required</sup> <a name="StorageResourceName" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceName"></a>

```go
func StorageResourceName() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureAdlsGen1MountConfig <a name="AzureAdlsGen1MountConfig" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/azureadlsgen1mount"

&azureadlsgen1mount.AzureAdlsGen1MountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClientId: *string,
	ClientSecretKey: *string,
	ClientSecretScope: *string,
	MountName: *string,
	StorageResourceName: *string,
	TenantId: *string,
	ClusterId: *string,
	Directory: *string,
	Id: *string,
	SparkConfPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#client_id AzureAdlsGen1Mount#client_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretKey">ClientSecretKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#client_secret_key AzureAdlsGen1Mount#client_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretScope">ClientSecretScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#client_secret_scope AzureAdlsGen1Mount#client_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.mountName">MountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#mount_name AzureAdlsGen1Mount#mount_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.storageResourceName">StorageResourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#storage_resource_name AzureAdlsGen1Mount#storage_resource_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#tenant_id AzureAdlsGen1Mount#tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#cluster_id AzureAdlsGen1Mount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.directory">Directory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#directory AzureAdlsGen1Mount#directory}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#id AzureAdlsGen1Mount#id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.sparkConfPrefix">SparkConfPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#spark_conf_prefix AzureAdlsGen1Mount#spark_conf_prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#client_id AzureAdlsGen1Mount#client_id}.

---

##### `ClientSecretKey`<sup>Required</sup> <a name="ClientSecretKey" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretKey"></a>

```go
ClientSecretKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#client_secret_key AzureAdlsGen1Mount#client_secret_key}.

---

##### `ClientSecretScope`<sup>Required</sup> <a name="ClientSecretScope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretScope"></a>

```go
ClientSecretScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#client_secret_scope AzureAdlsGen1Mount#client_secret_scope}.

---

##### `MountName`<sup>Required</sup> <a name="MountName" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.mountName"></a>

```go
MountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#mount_name AzureAdlsGen1Mount#mount_name}.

---

##### `StorageResourceName`<sup>Required</sup> <a name="StorageResourceName" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.storageResourceName"></a>

```go
StorageResourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#storage_resource_name AzureAdlsGen1Mount#storage_resource_name}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#tenant_id AzureAdlsGen1Mount#tenant_id}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#cluster_id AzureAdlsGen1Mount#cluster_id}.

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.directory"></a>

```go
Directory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#directory AzureAdlsGen1Mount#directory}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#id AzureAdlsGen1Mount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SparkConfPrefix`<sup>Optional</sup> <a name="SparkConfPrefix" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.sparkConfPrefix"></a>

```go
SparkConfPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/azure_adls_gen1_mount#spark_conf_prefix AzureAdlsGen1Mount#spark_conf_prefix}.

---



