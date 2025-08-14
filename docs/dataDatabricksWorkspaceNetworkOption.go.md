# `dataDatabricksWorkspaceNetworkOption` Submodule <a name="`dataDatabricksWorkspaceNetworkOption` Submodule" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceNetworkOption <a name="DataDatabricksWorkspaceNetworkOption" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/workspace_network_option databricks_workspace_network_option}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksworkspacenetworkoption"

datadatabricksworkspacenetworkoption.NewDataDatabricksWorkspaceNetworkOption(scope Construct, id *string, config DataDatabricksWorkspaceNetworkOptionConfig) DataDatabricksWorkspaceNetworkOption
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig">DataDatabricksWorkspaceNetworkOptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig">DataDatabricksWorkspaceNetworkOptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.resetNetworkPolicyId">ResetNetworkPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetNetworkPolicyId` <a name="ResetNetworkPolicyId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.resetNetworkPolicyId"></a>

```go
func ResetNetworkPolicyId()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksWorkspaceNetworkOption resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksworkspacenetworkoption"

datadatabricksworkspacenetworkoption.DataDatabricksWorkspaceNetworkOption_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksworkspacenetworkoption"

datadatabricksworkspacenetworkoption.DataDatabricksWorkspaceNetworkOption_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksworkspacenetworkoption"

datadatabricksworkspacenetworkoption.DataDatabricksWorkspaceNetworkOption_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksworkspacenetworkoption"

datadatabricksworkspacenetworkoption.DataDatabricksWorkspaceNetworkOption_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksWorkspaceNetworkOption resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksWorkspaceNetworkOption to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksWorkspaceNetworkOption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/workspace_network_option#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceNetworkOption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.networkPolicyIdInput">NetworkPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.networkPolicyId">NetworkPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.workspaceId">WorkspaceId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `NetworkPolicyIdInput`<sup>Optional</sup> <a name="NetworkPolicyIdInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.networkPolicyIdInput"></a>

```go
func NetworkPolicyIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *f64
```

- *Type:* *f64

---

##### `NetworkPolicyId`<sup>Required</sup> <a name="NetworkPolicyId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.networkPolicyId"></a>

```go
func NetworkPolicyId() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.workspaceId"></a>

```go
func WorkspaceId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOption.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceNetworkOptionConfig <a name="DataDatabricksWorkspaceNetworkOptionConfig" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksworkspacenetworkoption"

&datadatabricksworkspacenetworkoption.DataDatabricksWorkspaceNetworkOptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	NetworkPolicyId: *string,
	WorkspaceId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.networkPolicyId">NetworkPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/workspace_network_option#network_policy_id DataDatabricksWorkspaceNetworkOption#network_policy_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.workspaceId">WorkspaceId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/workspace_network_option#workspace_id DataDatabricksWorkspaceNetworkOption#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NetworkPolicyId`<sup>Optional</sup> <a name="NetworkPolicyId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.networkPolicyId"></a>

```go
NetworkPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/workspace_network_option#network_policy_id DataDatabricksWorkspaceNetworkOption#network_policy_id}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceNetworkOption.DataDatabricksWorkspaceNetworkOptionConfig.property.workspaceId"></a>

```go
WorkspaceId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/workspace_network_option#workspace_id DataDatabricksWorkspaceNetworkOption#workspace_id}.

---



