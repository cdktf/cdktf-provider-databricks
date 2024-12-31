# `dataDatabricksMwsNetworkConnectivityConfigs` Submodule <a name="`dataDatabricksMwsNetworkConnectivityConfigs` Submodule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMwsNetworkConnectivityConfigs <a name="DataDatabricksMwsNetworkConnectivityConfigs" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/mws_network_connectivity_configs databricks_mws_network_connectivity_configs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfigs"

datadatabricksmwsnetworkconnectivityconfigs.NewDataDatabricksMwsNetworkConnectivityConfigs(scope Construct, id *string, config DataDatabricksMwsNetworkConnectivityConfigsConfig) DataDatabricksMwsNetworkConnectivityConfigs
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig">DataDatabricksMwsNetworkConnectivityConfigsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig">DataDatabricksMwsNetworkConnectivityConfigsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.resetNames">ResetNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.resetId"></a>

```go
func ResetId()
```

##### `ResetNames` <a name="ResetNames" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.resetNames"></a>

```go
func ResetNames()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksMwsNetworkConnectivityConfigs resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfigs"

datadatabricksmwsnetworkconnectivityconfigs.DataDatabricksMwsNetworkConnectivityConfigs_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfigs"

datadatabricksmwsnetworkconnectivityconfigs.DataDatabricksMwsNetworkConnectivityConfigs_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfigs"

datadatabricksmwsnetworkconnectivityconfigs.DataDatabricksMwsNetworkConnectivityConfigs_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfigs"

datadatabricksmwsnetworkconnectivityconfigs.DataDatabricksMwsNetworkConnectivityConfigs_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksMwsNetworkConnectivityConfigs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksMwsNetworkConnectivityConfigs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksMwsNetworkConnectivityConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/mws_network_connectivity_configs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksMwsNetworkConnectivityConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.namesInput">NamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.names">Names</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamesInput`<sup>Optional</sup> <a name="NamesInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.namesInput"></a>

```go
func NamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.names"></a>

```go
func Names() *[]*string
```

- *Type:* *[]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigs.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMwsNetworkConnectivityConfigsConfig <a name="DataDatabricksMwsNetworkConnectivityConfigsConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfigs"

&datadatabricksmwsnetworkconnectivityconfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Names: *[]*string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/mws_network_connectivity_configs#id DataDatabricksMwsNetworkConnectivityConfigs#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.names">Names</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/mws_network_connectivity_configs#names DataDatabricksMwsNetworkConnectivityConfigs#names}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/mws_network_connectivity_configs#region DataDatabricksMwsNetworkConnectivityConfigs#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/mws_network_connectivity_configs#id DataDatabricksMwsNetworkConnectivityConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Names`<sup>Optional</sup> <a name="Names" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.names"></a>

```go
Names *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/mws_network_connectivity_configs#names DataDatabricksMwsNetworkConnectivityConfigs#names}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfigs.DataDatabricksMwsNetworkConnectivityConfigsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/mws_network_connectivity_configs#region DataDatabricksMwsNetworkConnectivityConfigs#region}.

---



